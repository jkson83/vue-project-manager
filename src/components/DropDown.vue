<script setup>
import { ref, nextTick, onBeforeMount, onUnmounted } from 'vue';
const props = defineProps({
    id: { type: String },
    dropLabel: { type: String },
    dropData: { type: Object }
});

const dropLabel = ref(props.dropLabel);
const selItem = ref();
const init = () => {
    let selObj = props.dropData.find((x) => x.selected == true);
    if (selObj) {
        selItem.value = selObj;
        dropLabel.value = selItem.value.label;
    } else {
        dropLabel.value = props.dropLabel;
    }
};

onBeforeMount(() => {
    init();
});

const showList = () => {
    let winH = window.innerHeight;
    let dropdown = document.querySelector(`#${props.id}`);
    let dropList = dropdown.querySelector('.dropdown-list');
    let allList = document.querySelectorAll('.dropdown-list');
    let items = dropdown.querySelectorAll('.dropdown-item');
    let dropH = dropdown.getBoundingClientRect().height;
    let dropT = dropdown.getBoundingClientRect().top;

    allList.forEach((list) => {
        list.style.display = 'none';
    });

    dropList.style.display = 'block';

    let listH = dropList.getBoundingClientRect().height;
    let dropPos = dropH + listH + dropT;

    if (winH > dropPos) {
        dropList.classList.remove('top');
    } else {
        dropList.classList.add('top');
    }

    nextTick(() => {
        if (selItem.value) {
            let selIdx = props.dropData.findIndex((x) => x.value == selItem.value.value);
            items[selIdx].focus();
        } else {
            items[0].focus();
        }

        // drop-down과 menu list 이외의 영역 클릭 시
        document.addEventListener('click', exceptArea);
        // focus가 menu list 밖으로 나갔을 때(tab 키)
        document.addEventListener('keydown', focusOutside);
    });
};

// drop-down과 menu list 이외의 영역 클릭 시
const exceptArea = (e) => {
    let target = e.target;
    let thisList = document.querySelector(`#${props.id} .dropdown-list`);
    if (!target.classList.contains('dropdown-trigger') & !target.classList.contains('dropdown-item')) {
        thisList.style.display = 'none';
        document.removeEventListener('click', exceptArea);
    }
};

// focus가 menu list 밖으로 나갔을 때(tab 키)
const focusOutside = (e) => {
    let focusEl = document.activeElement;
    let thisList = document.querySelector(`#${props.id} .dropdown-list`);
    let firstEl = thisList.querySelectorAll('.dropdown-item')[0];
    let lastEl = thisList.querySelectorAll('.dropdown-item')[props.dropData.length - 1];

    if (e.key == 'Tab') {
        if ((e.shiftKey && focusEl == firstEl) || (!e.shiftKey && focusEl == lastEl)) {
            e.preventDefault();
            thisList.style.display = 'none';
            document.removeEventListener('keydown', focusOutside);
        }
    }
};

// menu list에서 항목 선택 시 callback
const emit = defineEmits(['call-act']);
const selMenu = (val) => {
    let dropDown = document.querySelector(`#${props.id}`);
    let dropList = dropDown.querySelector('.dropdown-list');
    let sendObj = props.dropData.find((x) => x.value == val);

    selItem.value = sendObj;
    dropLabel.value = sendObj.label;
    dropList.style.display = 'none';
    dropDown.querySelector('.dropdown-trigger').focus();

    emit('call-act', selItem.value);
};

onUnmounted(() => {
    document.removeEventListener('click', exceptArea);
    document.removeEventListener('keydown', focusOutside);
});
</script>

<template>
    <div :id="props.id" class="dropdown">
        <button
            type="button"
            :id="`${props.id}_trigger`"
            class="dropdown-trigger"
            aria-haspopup="menu"
            aria-expanded="false"
            @click="showList"
        >
            {{ dropLabel }}
        </button>
        <ul
            class="dropdown-list"
            role="menu"
            :aria-labelledby="`${props.id}_trigger`"
            tabindex="-1"
            style="display: none"
        >
            <li v-for="(data, index) in props.dropData" role="presentation" :key="index">
                <button type="button" role="menuitem" class="dropdown-item" @click="selMenu(data.value)">
                    {{ data.label }}
                </button>
            </li>
        </ul>
    </div>
</template>
