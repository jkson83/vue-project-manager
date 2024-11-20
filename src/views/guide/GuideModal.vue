<script setup>
import { inject, ref, nextTick } from 'vue';
import ModalSample from '@/views/guide/ModalSample.vue';

// ui.global.js의 함수 호출
const systemModal = inject('systemModal');

// 일반 modal 함수 호출
const layerModal = inject('layerModal');

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

// confirm
const popConfirm = () => {
    /* modal options
        1. id: modal ID
        2. type: modal type, alert/confirm
        3. label: modal의 제목(aria-label)
        4. cont: modal 내용, html 작성 가능
        5. okText: modal 확인 버튼에 해당하는 버튼 텍스트, default: '확인'
        6. cancelText: modal 취소 버튼에 해당하는 버튼 텍스트, default: '취소'
        7. okCallback: modal 확인 버튼의 callback
        8. cancelCallback: modal 취소 버튼의 callback
    */
    systemModal.open({
        id: 'ConfirmSample',
        type: 'confirm',
        label: '확인 창',
        cont: '진행하시겠습니까?',
        okText: '확인',
        cancelText: '취소',
        okCallback: () => {
            console.log('confirm ok!!');
            popAlert();
        },
        cancelCallback: () => {
            console.log('confirm cancel!!');
        }
    });
};

// modal(regular)
const sampleData = ref([{ label: 'sample', value: '1' }]); // send data
const modalType = ref();
const modalOpen = (_type) => {
    modalType.value = _type;

    nextTick(() => {
        layerModal.open({ id: 'SampleModal' });
    });
};
// const modalTop = () => {
//     layerModal.open({ id: 'SampleModal2' });
// };
// const modalBottom = () => {
//     layerModal.open({ id: 'SampleModal3' });
// };
</script>

<template>
    <div class="contents">
        <h2 class="guide-title">Modal</h2>

        <h3 class="guide-stitle">1. System Modal</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// 'inject' import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'vue'</span>;

<span class="comment">// ui.modal.js의 함수 호출</span>
<span class="tag">const</span> <span class="evt">systemModal</span> = <span class="func">inject<span class="mark">(</span><span class="val">'systemModal'</span><span class="mark">)</span></span>;

<span class="comment">/* modal options
    id: modal ID
    type: modal type(alert/confirm)
    label: modal의 제목(aria-label)
    cont: modal 내용, html 작성 가능
    okText: modal 확인 버튼에 해당하는 버튼 텍스트, default: '확인'
    cancelText: modal 취소 버튼에 해당하는 버튼 텍스트, default: '취소'
    okCallback: modal 확인 버튼의 callback
    cancelCallback: modal 취소 버튼의 callback
*/</span>
<span class="evt">systemModal</span>.<span class="func">open(</span><span class="braket">{</span>
    <span class="props">id:</span> <span class="val">'ConfirmSample'</span>,
    <span class="props">type:</span> <span class="val">'confirm'</span>,
    <span class="props">label:</span> <span class="val">'확인 창'</span>,
    <span class="props">cont:</span> <span class="val">'진행하시겠습니까?'</span>,
    <span class="props">okText:</span> <span class="val">'확인'</span>,
    <span class="props">cancelText:</span> <span class="val">'취소'</span>,
    <span class="props">okCallback:</span> <span class="mark">()</span> <span class="tag">=></span> <span class="mark">{</span>
        <span class="props">console</span>.<span class="func">log(</span><span class="val">'confirm ok!!'</span><span class="func">)</span>;
    <span class="mark">}</span>,
    <span class="props">cancelCallback:</span> <span class="mark">()</span> <span class="tag">=></span> <span class="mark">{</span>
        <span class="props">console</span>.<span class="func">log(</span><span class="val">'confirm cancel!!'</span><span class="func">)</span>;
    <span class="mark">}</span>
<span class="braket">}</span><span class="func">)</span>;
</pre>
        </div>
        <p class="guide-cont type-row">
            <button
                type="button"
                class="btn-secondary"
                aria-haspopup="dialog"
                aria-controls="AlertSample"
                @click="popAlert()"
            >
                Alert
            </button>
            <button
                type="button"
                class="btn-secondary"
                aria-haspopup="dialog"
                aria-controls="ConfirmSample"
                @click="popConfirm()"
            >
                Confirm
            </button>
        </p>

        <h3 class="guide-stitle">2. Modal</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// 'inject' import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'vue'</span>;

<span class="comment">// modal component import</span>
<span class="import">import</span> <span class="props">ModalSample</span> <span class="import">from</span> <span class="val">'<i>component 경로</i>'</span>

<span class="comment">// 일반 modal 함수 호출</span>
<span class="tag">const</span> <span class="evt">layerModal</span> = <span class="func">inject</span><span class="mark">(</span><span class="val">'layerModal'</span><span class="mark">)</span>;

<span class="comment">// modal에 전달할 data</span>
<span class="tag">const</span> <span class="evt">sampleData</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span><span class="braket">{</span> <span class="props">label:</span> <span class="val">'sample'</span>, <span class="props">value:</span> <span class="val">'1'</span> <span class="braket">}</span><span class="func">]</span><span class="mark">)</span>;

<span class="comment">// modal open function</span>
<span class="tag">const</span> <span class="func">modalOpen</span> = <span class="mark">()</span> <span class="tag">=></span> <span class="mark">{</span>
    <span class="comment">// id: modal id</span>
    <span class="evt">layerModal</span>.<span class="func">open(</span><span class="braket">{</span> <span class="props">id:</span> <span class="val">'SampleModal'</span> <span class="braket">}</span><span class="func">)</span>;
<span class="mark">}</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">modal-sample</span>
    <span class="props">:modal-option</span>="<span class="func">{</span> <span class="props">id:</span> <span class="val">'SampleModal'</span>, <span class="props">type:</span> <span class="val">'full'</span> <span class="func">}</span>"
    <span class="props">:modal-data</span>="<span class="props">sampleData</span>"
<span class="arrow">&gt;&lt;/</span><span class="component">modal-sample</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont type-row">
            <button
                type="button"
                class="btn-secondary"
                aria-haspopup="dialog"
                aria-controls="SampleModal"
                @click="modalOpen('full')"
            >
                <span>Type: Full</span>
            </button>
            <button
                type="button"
                class="btn-secondary"
                aria-haspopup="dialog"
                aria-controls="SampleModal2"
                @click="modalOpen('top')"
            >
                <span>Type: top</span>
            </button>
            <button
                type="button"
                class="btn-secondary"
                aria-haspopup="dialog"
                aria-controls="SampleModal3"
                @click="modalOpen('bottom')"
            >
                <span>Type: bottom</span>
            </button>
        </div>

        <h3 class="guide-stitle">2-1. Modal Sample</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// 'inject' import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'vue'</span>;
<span class="comment">// 'ModalLayer' 공통 component import</span>
<span class="import">import</span> <span class="props">ModalLayer</span> <span class="import">from</span> <span class="val">'@/components/ModalLayer.vue'</span>;

<span class="comment">// 일반 modal 함수 호출</span>
<span class="tag">const</span> <span class="evt">layerModal</span> = <span class="func">inject</span><span class="mark">(</span><span class="val">'layerModal'</span><span class="mark">)</span>;

<span class="comment">// 전달받은 data</span>
<span class="tag">const</span> <span class="evt">props</span> = <span class="func">defineProps</span><span class="mark">(</span><span class="func">{</span>
    <span class="props">modalOption:</span> <span class="braket">{</span> <span class="type">type: Object</span> <span class="braket">}</span>,
    <span class="props">modalData:</span> <span class="braket">{</span> <span class="type">type: Object</span> <span class="braket">}</span>
<span class="func">}</span><span class="mark">)</span>;

<span class="comment">// modal close</span>
<span class="tag">const</span> <span class="func">modalClose</span> = <span class="mark">()</span> <span class="tag">=></span> <span class="mark">{</span>
    <span class="evt">layerModal</span>.<span class="func">close(</span><span class="braket">{</span> <span class="props">id:</span> <span class="evt">props</span>.<span class="props">modalOption.id</span> <span class="braket">}</span><span class="func">)</span>;
<span class="mark">}</span>;

<span class="comment">// modal ok</span>
<span class="tag">const</span> <span class="func">modalOk</span> = <span class="mark">()</span> <span class="tag">=></span> <span class="mark">{</span>
    <span class="comment">// modal '확인' 버튼 클릭 시 실행될 내용</span>
<span class="mark">}</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">modal-layer</span>
    <span class="props">:modal-id</span>="<span class="evt">props</span>.<span class="props">modalOption</span>.<span class="props">id</span>"
    <span class="props">:modal-type</span>="<span class="evt">props</span>.<span class="props">modalOption</span>.<span class="props">type</span>"
    <span class="props">:label-id</span>="<span class="val">`</span><span class="tag">${</span><span class="evt">props</span>.<span class="props">modalOption</span>.<span class="props">id</span><span class="tag">}</span><span class="val">_label`</span>"
    @<span class="props">close</span>="<span class="func">modalClose</span>"
<span class="arrow">&gt;</span>
    <span class="comment">&lt;!-- 팝업 header --&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">header</span><span class="arrow">&gt;</span>
        <span class="comment">&lt;!-- 팝업 제목 --&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">h1</span> :<span class="props">id</span>="<span class="val">`</span><span class="tag">${</span><span class="evt">props</span>.<span class="props">modalOption</span>.<span class="props">id</span><span class="tag">}</span><span class="val">_label`</span>" <span class="props">class</span>="<span class="val">modal-title</span>"<span class="arrow">&gt;</span>Modal Sample<span class="arrow">&lt;/</span><span class="tag">h1</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

    <span class="comment">&lt;!-- 팝업 body --&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">body</span><span class="arrow">&gt;</span>
        <span class="comment">&lt;!-- 팝업 내용 --&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Modal contents
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>

    <span class="comment">&lt;!-- 팝업 footer --&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">footer</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>="<span class="val">button</span>" <span class="props">class</span>="<span class="val">modal-btn-gray</span>" @<span class="props">click</span>="<span class="func">modalClose</span>"<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>취소<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>="<span class="val">button</span>" <span class="props">class</span>="<span class="val">modal-btn-primary</span>" @<span class="props">click</span>="<span class="func">modalOk</span>"<span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>확인<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">modal-layer</span><span class="arrow">&gt;</span>
</pre>
        </div>
    </div>

    <!-- modal(regular) component -->
    <modal-sample :modal-option="{ id: 'SampleModal', type: modalType }" :modal-data="sampleData"></modal-sample>
    <!--modal-sample :modal-option="{ id: 'SampleModal2', type: 'top' }" :modal-data="sampleData"></~modal-sample-->
    <!--modal-sample :modal-option="{ id: 'SampleModal3', type: 'bottom' }" :modal-data="sampleData"></!--modal-sample-->
</template>
