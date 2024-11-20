<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    modalId: { type: String },
    modalType: { type: String },
    labelId: { type: String }
});

const emit = defineEmits(['close']);

// 웹접근성
const accessibility = () => {
    let modal = document.querySelector(`#${props.modalId}`);
    let focusableEls = modal.querySelectorAll(
        '[href], button, select, input, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableEls.forEach((el) => {
        el.setAttribute('tabindex', -1);
    });
};

onMounted(() => {
    accessibility();
});
</script>

<template>
    <Teleport to=".modal-layout">
        <div
            :id="props.modalId"
            :class="`modal-wrap ${modalType}`"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="labelId"
            :aria-describedby="`${props.modalId}_desc`"
            tabindex="-1"
        >
            <div class="modal-header" v-if="$slots.header">
                <slot name="header"></slot>
            </div>

            <div :id="`${props.modalId}_desc`" class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>

            <button type="button" class="modal-close" @click="emit('close')">
                <span class="sr-only">닫기</span>
            </button>
        </div>
    </Teleport>
</template>
