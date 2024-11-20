<script setup>
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue';
const data = defineProps({
    id: { type: String },
    comboTitle: { type: String },
    comboName: { type: String },
    comboOptions: { type: Object },
    placeholder: { type: String }
});

// text display
const selOptions = ref({});
const dispPlaceholder = ref(true);
const selCnt = ref();
const selboxDisplay = () => {
    let selIdx = data.comboOptions.findIndex((x) => x.selected == true);
    let selObj = selIdx > 0 && data.comboOptions[selIdx];
    let selText = selIdx > 0 && selObj.label;
    let selVal = selIdx > 0 && selObj.value;

    selOptions.value.label = !selText ? '' : selText;
    selOptions.value.value = !selVal ? '' : selVal;
    selCnt.value = selIdx;

    selCnt.value > -1 ? (dispPlaceholder.value = false) : (dispPlaceholder.value = true);
};

// select box init
onBeforeMount(() => {
    selboxDisplay();
});

const arrowUpDown = () => {
    let selBox = document.querySelector(`#${data.id}_combo`);
    let e = window.event;
    let focusEl = document.activeElement;
    if (focusEl == selBox) {
        if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {
            if (e.key == 'ArrowDown') {
                e.preventDefault();
                selCnt.value++;
                if (selCnt.value > data.comboOptions.length - 1) {
                    selCnt.value = data.comboOptions.length - 1;
                }
            } else if (e.key == 'ArrowUp') {
                e.preventDefault();
                selCnt.value--;
                if (selCnt.value < 0) {
                    selCnt.value = 0;
                }
            }

            dispPlaceholder.value = false;
            selOptions.value.label = data.comboOptions[selCnt.value].label;
            selOptions.value.value = data.comboOptions[selCnt.value].value;
        }
    }
};

onMounted(() => {
    document.addEventListener('keydown', arrowUpDown);
});

onUnmounted(() => {
    document.removeEventListener('keydown', arrowUpDown);
});

// options list open
const selKeyDown = (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        selboxOpen();
    }
};

// option list
const selboxOpen = () => {
    let winH = window.innerHeight;
    let allBox = document.querySelectorAll('.select-box .selbox-btn');
    let allList = document.querySelectorAll('.selbox-list');
    let allOpt = document.querySelectorAll('.selbox-opt');
    let selBox = document.querySelector(`#${data.id}_combo`);
    let selList = document.querySelector(`#${data.id}_listbox`);
    let selIdx = selOptions.value.label ? data.comboOptions.findIndex((x) => x.label == selOptions.value.label) : 0;
    let selOpt = selList.querySelectorAll('li')[selIdx];
    let selBoxT = selBox.getBoundingClientRect().top;
    let selBoxH = selBox.getBoundingClientRect().height;

    // 모든 combo-box aria-expanded값 false
    allBox.forEach((box) => {
        box.setAttribute('aria-expanded', false);
    });

    // 모든 option list close
    allList.forEach((list) => {
        list.style.display = 'none';
    });

    // 모든 option의 tabindex값 -1
    allOpt.forEach((opt) => {
        opt.setAttribute('tabindex', -1);
    });

    // 자신의 aria-expanded값 true
    selBox.closest('.selbox-btn').setAttribute('aria-expanded', true);

    // 자신의 option list open
    selList.style.display = 'block';
    selList.querySelectorAll('.selbox-opt').forEach((opt) => {
        opt.setAttribute('tabindex', 0);
    });

    let selListH = selList.getBoundingClientRect().height;
    let selBoxP = selBoxT + selBoxH + selListH;
    if (winH > selBoxP) {
        selList.classList.remove('top');
    } else {
        selList.classList.add('top');
    }

    selOpt.focus();

    changeSelOpt();

    // option list 이외의 영역 click
    document.addEventListener('click', clickExcept);
};

// option change
const changeSelOpt = () => {
    let selList = document.querySelector(`#${data.id}_listbox`);
    let opts = selList.querySelectorAll('.selbox-opt');

    // option select(keydown)
    selList.addEventListener('keydown', focusMove);

    // option select(click)
    opts.forEach((opt, index) => {
        opt.addEventListener('click', () => {
            selCnt.value = index;
            selectOption(index);
        });
    });
};

// select result
const selectOption = (val) => {
    let selBox = document.querySelector(`#${data.id}_combo`);
    let selList = document.querySelector(`#${data.id}_listbox`);
    let changeObj = data.comboOptions[val];
    let changeLabel = changeObj.label;
    let changeVal = changeObj.value;

    selOptions.value.label = changeLabel;
    selOptions.value.value = changeVal;

    // option list close
    selList.style.display = 'none';
    selList.querySelectorAll('.selbox-opt').forEach((opt) => {
        opt.setAttribute('tabindex', -1);
    });
    dispPlaceholder.value = false;

    selBox.focus();
};

// focus move
const focusMove = () => {
    let selList = document.querySelector(`#${data.id}_listbox`);
    let opts = selList.querySelectorAll('.selbox-opt');
    let e = window.event;

    // 화살표 위/아래 이동
    if (e.key == 'ArrowDown' || e.key == 'ArrowUp') {
        if (e.key == 'ArrowDown') {
            e.preventDefault();
            selCnt.value++;
            if (selCnt.value > data.comboOptions.length - 1) {
                selCnt.value = data.comboOptions.length - 1;
            }
        } else if (e.key == 'ArrowUp') {
            e.preventDefault();
            selCnt.value--;
            if (selCnt.value < 0) {
                selCnt.value = 0;
            }
        }

        opts[selCnt.value].focus();
    }

    // tab 키 이동
    let focusEl = document.activeElement;
    if (e.key == 'Tab') {
        if (e.shiftKey) {
            selCnt.value--;
            if (selCnt.value < 0) {
                selCnt.value = 0;
            }

            if (focusEl == opts[0]) {
                e.preventDefault();
                opts[0].focus();
            }
        } else if (!e.shiftKey) {
            selCnt.value++;
            if (selCnt.value > data.comboOptions.length - 1) {
                selCnt.value = data.comboOptions.length - 1;
            }

            if (focusEl == opts[opts.length - 1]) {
                e.preventDefault();
                opts[opts.length - 1].focus();
            }
        }
    }

    // 'enter' 키 선택
    if (e.key == 'Enter') {
        let selIdx = data.comboOptions.findIndex((x) => x.value == document.activeElement.getAttribute('data-value'));

        selCnt.value = selIdx;
        selectOption(selIdx);
    }
};

// option list 이외의 영역 click
const clickExcept = () => {
    let allBox = document.querySelectorAll('.select-box .selbox-btn');
    let allList = document.querySelectorAll('.selbox-list');
    let allOpt = document.querySelectorAll('.selbox-opt');
    let e = window.event;
    if (!e.target.classList.contains('selbox-input')) {
        if (!e.target.classList.contains('selbox-opt')) {
            allBox.forEach((box) => {
                box.setAttribute('aria-expanded', false);
            });

            allList.forEach((list) => {
                list.style.display = 'none';
                document.removeEventListener('click', clickExcept);
            });

            allOpt.forEach((opt) => {
                opt.setAttribute('tabindex', -1);
            });

            selCnt.value = '';
        }
    }
};
</script>

<template>
    <div class="select-box">
        <span
            class="selbox-btn"
            role="combobox"
            :aria-label="data.comboTitle"
            aria-expanded="false"
            :aria-owns="`${data.id}_listbox`"
            aria-haspopup="listbox"
        >
            <span v-if="dispPlaceholder" class="placeholder">{{ data.placeholder }}</span>
            <input
                type="text"
                :id="`${data.id}_combo`"
                class="selbox-input"
                aria-autocomplete="list"
                :aria-controls="`${data.id}_listbox`"
                :aria-activedescendant="selOptions.selId"
                aria-readonly="true"
                v-model="selOptions.label"
                readonly
                @click="selboxOpen()"
                @keydown="selKeyDown($event)"
            />
        </span>
        <ul :id="`${data.id}_listbox`" class="selbox-list" role="listbox" style="display: none">
            <li
                v-for="(option, index) in data.comboOptions"
                :key="index"
                class="selbox-opt"
                role="option"
                :id="`${data.id}_opt${index + 1}`"
                :data-value="option.value"
                tabindex="-1"
            >
                {{ option.label }}
            </li>
        </ul>
    </div>
</template>
