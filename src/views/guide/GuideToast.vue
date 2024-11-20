<script setup>
// inject import
import { inject } from 'vue';

// ui.global.js의 toastModal 호출
const toastModal = inject('toastModal');

// toastModal 함수
const popToast = () => {
    /** toast options
     * 1. id: Toast id
     * 2. cont: Toast 내용
     * 3. during: Toast 유지 시간(단위: ms) - optional: 없으면 기본 3000
     */
    toastModal({
        id: 'ToastSample1',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        during: 3000
    });
};
</script>

<template>
    <div class="contents">
        <h2 class="guide-title">Toast</h2>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// inject import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'vue'</span>;

<span class="comment">// ui.global.js의 toastModal 호출</span>
<span class="tag">const</span> <span class="evt">toastModal</span> = <span class="func">inject</span><span class="mark">(</span><span class="val">'toastModal'</span><span class="mark">)</span>;

<span class="comment">// toastModal 함수</span>
<span class="tag">const</span> <span class="func">popToast</span> = <span class="mark">()</span> <span class="tag">=></span> <span class="mark">{</span>
    <span class="comment">/** toast options
     * 1. id: Toast id
     * 2. cont: Toast 내용
     * 3. during: Toast 유지 시간(단위: ms) - optional: 없으면 기본 3000
     */</span>
    <span class="func">toastModal(</span><span class="braket">{</span>
        <span class="props">id:</span> <span class="val">'ToastSample1'</span>,
        <span class="props">cont:</span> <span class="val">'Lorem ipsum dolor sit amet, consectetur adipisicing elit'</span>,
        <span class="props">during:</span> <span class="num">3000</span>
    <span class="braket">}</span><span class="func">)</span>;
<span class="mark">}</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"btn-secondary"</span> @<span class="props">click</span>="<span class="func">popToast</span>"<span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>toast<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <button type="button" class="btn-secondary" @click="popToast">
                <span>toast</span>
            </button>
        </div>
    </div>
</template>
