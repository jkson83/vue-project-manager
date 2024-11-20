<script setup>
import { inject } from 'vue';
import ModalLayer from '@/components/ModalLayer.vue';

// 일반 modal 함수 호출
const systemModal = inject('systemModal');
const layerModal = inject('layerModal');

const props = defineProps({
    modalOption: { type: Object },
    modalData: { type: Object }
});

// alert
const popAlert = () => {
    systemModal.open({
        id: 'AlertSample',
        type: 'alert',
        label: '알림 창',
        cont: '확인하였습니다.',
        okText: '확인',
        okCallback: () => {
            console.log('alert ok!!');
        }
    });
};

const modalOk = () => {
    systemModal.open({
        id: 'ConfirmSample',
        type: 'confirm',
        label: '확인 창',
        cont: '진행하시겠습니까?',
        okText: '확인',
        cancelText: '취소',
        cancelCallback: () => {
            console.log('confirm cancel!!');
        },
        okCallback: () => {
            console.log('confirm ok!!');
            popAlert();
        }
    });
};

// modal close
const modalClose = () => {
    layerModal.close({ id: props.modalOption.id });
};
</script>

<template>
    <modal-layer
        :modal-id="props.modalOption.id"
        :modal-type="props.modalOption.type"
        :label-id="`${props.modalOption.id}_label`"
        @close="modalClose"
    >
        <template #header>
            <h1 :id="`${props.modalOption.id}_label`" class="modal-title">Modal Test</h1>
        </template>
        <template #body>
            <p>
                receive data : {{ props.modalData }}<br /><br />
                Modal Contents...<br />
                Modal Contents...<br />
                <a href="#">anchor</a>
                <button type="button">button</button><br />
                input
                <label :for="`${props.modalOption.id}-inpName`">Name</label>
                <input
                    type="text"
                    :id="`${props.modalOption.id}-inpName`"
                    name="name"
                    placeholder="example.."
                    autocomplete="off"
                /><br />
                textarea
                <textarea name="textarea"></textarea><br />
                Modal Contents...<br />
                Modal Contents...<br />
                Modal Contents...<br />
                Modal Contents...<br />
                Modal Contents...<br />
                Modal Contents...<br />
                Modal Contents...<br />
                Modal Contents...<br />
                Modal Contents...<br />
                Modal Contents...
            </p>
        </template>
        <template #footer>
            <button type="button" class="modal-btn-gray" @click="modalClose">
                <span>취소</span>
            </button>
            <button type="button" class="modal-btn-primary" @click="modalOk">
                <span>확인</span>
            </button>
        </template>
    </modal-layer>
</template>
