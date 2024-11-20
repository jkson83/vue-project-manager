<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    id: { type: String },
    accoOption: { type: Object }
});

const options = ref({
    disabled: props.accoOption ? props.accoOption.disabled : false,
    opened: props.accoOption ? props.accoOption.opened : false
});

const accoOpenClose = () => {
    let self = document.querySelector(`#${props.id}`);
    if (!options.value.disabled) {
        let acco = self.closest('.acco-header');
        if (!acco.classList.contains('show')) {
            acco.classList.add('show');
            self.setAttribute('aria-expanded', true);
        } else {
            acco.classList.remove('show');
            self.setAttribute('aria-expanded', false);
        }
    }
};

onMounted(() => {
    if (options.value.opened || options.value.disabled) {
        let self = document.querySelector(`#${props.id}`);
        let acco = self.closest('.acco-header');
        acco.classList.add('show');
        self.setAttribute('aria-expanded', true);
    }
});
</script>

<template>
    <div class="accordion">
        <div class="acco-header">
            <!-- 펼친 상태 유지할 때는 aria-disabled="true" 추가 -->
            <h3>
                <button
                    type="button"
                    :id="props.id"
                    class="acco-trigger"
                    aria-expanded="false"
                    :aria-controls="`${props.id}-panel1`"
                    :aria-disabled="options.disabled"
                    @click="accoOpenClose($event)"
                >
                    <span>
                        <slot name="accoTitle"></slot>
                    </span>
                </button>
            </h3>
        </div>
        <!-- 동시에 펼쳐지는 panel이 6개 이상일 경우, role="region" 사용 지양 -->
        <div :id="`${props.id}-panel`" class="acco-panel" role="region" :aria-labelledby="props.id">
            <slot name="accoPanel"></slot>
        </div>
    </div>
</template>
