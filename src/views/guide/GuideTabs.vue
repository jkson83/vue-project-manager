<script setup>
import { inject, onMounted } from 'vue';

// ui.global.js의 tab setup 함수 호출
const tabContents = inject('tabContents');

onMounted(() => {
    /* tab contents options
        1. id: tab contents의 ID
        2. active: selected tab의 index, 기재하지 않으면 기본값 0
    */
    tabContents.setup({
        id: 'TabSample1',
        active: 0
    });
});
</script>

<template>
    <div class="contents">
        <h2 class="guide-title">Tabs</h2>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// 'inject' import</span>
<span class="import">import</span> <span class="mark">{</span> <span class="props">inject</span>, <span class="props">onMounted</span> <span class="mark">}</span> <span class="import">from</span> <span class="val">'vue'</span>;

<span class="comment">// ui.global.js의 tab setup 함수 호출</span>
<span class="tag">const</span> <span class="evt">tabContents</span> = <span class="func">inject</span><span class="mark">(</span><span class="val">'tabContents'</span><span class="mark">)</span>;

<span class="comment">// life-cycle</span>
<span class="func">onMounted</span><span class="mark">(</span><span class="func">()</span> <span class="tag">=></span> <span class="func">{</span>
    <span class="comment">/* tab contents options
        1. id: tab contents의 ID
        2. active: selected tab의 index, 기재하지 않으면 기본값 0
    */</span>
    <span class="evt">tabContents</span>.<span class="func">setup</span><span class="braket">(</span><span class="mark">{</span>
        <span class="props">id:</span> <span class="val">'TabSample1'</span>,
        <span class="props">active:</span> <span class="num">0</span>
    <span class="mark">}</span><span class="braket">)</span>;
<span class="func">}</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">id</span>=<span class="val">"TabSample1"</span> <span class="props">class</span>=<span class="val">"tabs-wrap"</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">ul</span> <span class="props">class</span>=<span class="val">"tab-list"</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">li</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"tab-item"</span><span class="arrow">&gt;</span><span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Tab 1<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">li</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">li</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"tab-item"</span><span class="arrow">&gt;</span><span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Tab 2<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">li</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">li</span><span class="arrow">&gt;</span>
            <span class="arrow">&lt;</span><span class="tag">button</span> <span class="props">type</span>=<span class="val">"button"</span> <span class="props">class</span>=<span class="val">"tab-item"</span><span class="arrow">&gt;</span><span class="arrow">&lt;</span><span class="tag">span</span><span class="arrow">&gt;</span>Tab 3<span class="arrow">&lt;/</span><span class="tag">span</span><span class="arrow">&gt;</span><span class="arrow">&lt;/</span><span class="tag">button</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;/</span><span class="tag">li</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">ul</span><span class="arrow">&gt;</span>

    <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"tab-contents"</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"tab-panel"</span><span class="arrow">&gt;</span>Tab 1 Contents<span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"tab-panel"</span><span class="arrow">&gt;</span>Tab 2 Contents<span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>
        <span class="arrow">&lt;</span><span class="tag">div</span> <span class="props">class</span>=<span class="val">"tab-panel"</span><span class="arrow">&gt;</span>Tab 3 Contents<span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="tag">div</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <div id="TabSample1" class="tabs-wrap">
                <ul class="tab-list">
                    <li>
                        <button type="button" class="tab-item"><span>Tab 1</span></button>
                    </li>
                    <li>
                        <button type="button" class="tab-item"><span>Tab 2</span></button>
                    </li>
                    <li>
                        <button type="button" class="tab-item"><span>Tab 3</span></button>
                    </li>
                </ul>

                <div class="tab-contents">
                    <div class="tab-panel">Tab 1 Contents</div>
                    <div class="tab-panel">Tab 2 Contents</div>
                    <div class="tab-panel">Tab 3 Contents</div>
                </div>
            </div>
        </div>
    </div>
</template>
