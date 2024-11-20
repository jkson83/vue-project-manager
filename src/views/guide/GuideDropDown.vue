<script setup>
import { ref } from 'vue';
import DropDown from '@/components/DropDown.vue';

const dropSample = ref([
    { label: 'Sample 1', value: '1' },
    { label: 'Sample 2', value: '2' },
    { label: 'Sample 3', value: '3' },
    { label: 'Sample 4', value: '4' },
    { label: 'Sample 5', value: '5' },
    { label: 'Sample 6', value: '6' },
    { label: 'Sample 7', value: '7' }
]);

const dropSample2 = ref([
    { label: 'Sample 1', value: '1' },
    { label: 'Sample 2', value: '2' },
    { label: 'Sample 3', value: '3', selected: true },
    { label: 'Sample 4', value: '4' },
    { label: 'Sample 5', value: '5' }
]);

// drop down list에서 선택한 object
const dropdownAct = (val) => {
    console.log('select:', val);
};
</script>

<template>
    <div class="contents">
        <h2 class="guide-title">Drop Down</h2>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// component import</span>
<span class="import">import</span> <span class="props">DropDown</span> <span class="import">from</span> <span class="val">'@/components/DropDown.vue'</span>;

<span class="comment">// dropdown list</span>
<span class="tag">const</span> <span class="evt">dropSample</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 1'</span>, <span class="props">value:</span> <span class="val">'1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 2'</span>, <span class="props">value:</span> <span class="val">'2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 3'</span>, <span class="props">value:</span> <span class="val">'3'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 4'</span>, <span class="props">value:</span> <span class="val">'4'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 5'</span>, <span class="props">value:</span> <span class="val">'5'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 6'</span>, <span class="props">value:</span> <span class="val">'6'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 7'</span>, <span class="props">value:</span> <span class="val">'7'</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">drop-down</span>
    <span class="props">id</span>="<span class="val">DropdownSample1</span>"
    :<span class="props">drop-label</span>="<span class="val">`Drop-down Sample`</span>"
    :<span class="props">drop-data</span>="<span class="props">dropSample</span>"
    @<span class="props">call-act</span>="<span class="func">dropdownAct</span>"
<span class="arrow">&gt;&lt;/</span><span class="component">drop-down</span><span class="arrow">&gt;</span>;
</pre>
        </div>
        <div class="guide-cont">
            <drop-down
                id="DropdownSample1"
                :drop-label="`Drop-down Sample`"
                :drop-data="dropSample"
                @call-act="dropdownAct"
            ></drop-down>
        </div>

        <h3 class="guide-stitle">2. Selected</h3>
        <div class="guide-info">부여할 item 목록에서 "selected: true" 추가</div>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">dropSample2</span> = <span class="func">reactive</span><span class="mark">(</span><span class="func">[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 1'</span>, <span class="props">value:</span> <span class="val">'1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 2'</span>, <span class="props">value:</span> <span class="val">'2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 3'</span>, <span class="props">value:</span> <span class="val">'3'</span>, <span class="props">selected:</span> <span class="tag">true</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 4'</span>, <span class="props">value:</span> <span class="val">'4'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Sample 5'</span>, <span class="props">value:</span> <span class="val">'5'</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-cont">
            <drop-down
                id="DropdownSample2"
                :drop-label="`Drop-down Sample2`"
                :drop-data="dropSample2"
                @call-act="dropdownAct"
            ></drop-down>
        </div>
    </div>
</template>
