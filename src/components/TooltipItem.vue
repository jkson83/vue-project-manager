<script setup>
import { ref, nextTick } from 'vue';

const props = defineProps({
    id: { type: String },
    tipTitle: { type: String }
});

const tooltipOpen = ref(false);

// tooltip show/hide
const tipShowHide = (e) => {
    if (!tooltipOpen.value) {
        tooltipOpen.value = true;

        nextTick(() => {
            let winH = window.innerHeight;
            let scrT = window.scrollY;
            let tipTrigger = e.target;
            let tipT = tipTrigger.getBoundingClientRect().top;
            let tipH = tipTrigger.getBoundingClientRect().height;
            let tipL = tipTrigger.getBoundingClientRect().left;

            let tipObj = document.querySelector(`#${props.id}-tooltip`);
            let tipObjH = tipObj.getBoundingClientRect().height;

            let tipObjPos = tipT + tipH + tipObjH;
            let tipObjL = tipL;
            let tipObjT;

            tipObj.style.left = `${tipObjL - 7}px`;

            if (winH > tipObjPos) {
                tipObj.classList.remove('top');

                tipObjT = tipT + tipH + scrT;
                tipObj.style.top = `${tipObjT + 6}px`;
            } else {
                tipObj.classList.add('top');

                tipObjT = tipT - tipObjH + scrT;
                tipObj.style.top = `${tipObjT - 6}px`;
            }
        });
    } else {
        tooltipOpen.value = false;
    }
};
</script>

<template>
    <div class="tooltip">
        <button
            type="button"
            :id="props.id"
            class="tooltip-trigger"
            :aria-describedby="`${props.id}-tooltip`"
            @click="tipShowHide"
            @blur="tipShowHide"
        >
            <span class="sr-only">{{ props.tipTitle }}</span>
        </button>
        <teleport to="body">
            <div v-if="tooltipOpen" :id="`${props.id}-tooltip`" class="tooltip-wrap" role="tooltip">
                <slot></slot>
                <span class="tip-arrow"></span>
            </div>
        </teleport>
    </div>
</template>
