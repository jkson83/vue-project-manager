<script setup>
import { ref } from 'vue';
import ComboBox from '@/components/ComboBox.vue';

// combo-box option list
const options = ref([
    { label: 'Select option1', value: '1' },
    { label: 'Select option2', value: '2' },
    { label: 'Select option3', value: '3' },
    { label: 'Select option4', value: '4' },
    { label: 'Select option5', value: '5' },
    { label: 'Select option6', value: '6' },
    { label: 'Select option7', value: '7' },
    { label: 'Select option8', value: '8' },
    { label: 'Select option9', value: '9' },
    { label: 'Select option10', value: '10' }
]);

const options2 = ref([
    { label: 'Select option1', value: '1' },
    { label: 'Select option2', value: '2' },
    { label: 'Select option3', value: '3', selected: true },
    { label: 'Select option4', value: '4' },
    { label: 'Select option5', value: '5' }
]);
</script>

<template>
    <div class="contents">
        <h2 class="guide-title">Select(combo-box)</h2>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// component import</span>
<span class="import">import</span> <span class="props">ComboBox</span> <span class="import">from</span> <span class="val">'@/components/ComboBox.vue'</span>;

<span class="comment">// select box options</span>
<span class="tag">const</span> <span class="evt">options</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option1'</span>, <span class="props">value:</span> <span class="val">'1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option2'</span>, <span class="props">value:</span> <span class="val">'2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option3'</span>, <span class="props">value:</span> <span class="val">'3'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option4'</span>, <span class="props">value:</span> <span class="val">'4'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option5'</span>, <span class="props">value:</span> <span class="val">'5'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option6'</span>, <span class="props">value:</span> <span class="val">'6'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option7'</span>, <span class="props">value:</span> <span class="val">'7'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option8'</span>, <span class="props">value:</span> <span class="val">'8'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option9'</span>, <span class="props">value:</span> <span class="val">'9'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option10'</span>, <span class="props">value:</span> <span class="val">'10'</span> <span class="braket">}</span>
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">combo-box</span>
    <span class="props">id</span>="<span class="val">comboExamle1</span>"
    :<span class="props">combo-title</span>="<span class="val">`Select Exmaple1`</span>"
    :<span class="props">combo-name</span>="<span class="val">`example1`</span>"
    :<span class="props">combo-options</span>="<span class="props">options</span>"
    :<span class="props">placeholder</span>="<span class="val">`선택하세요`</span>"
<span class="arrow">&gt;&lt;/</span><span class="component">combo-box</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <combo-box
                id="comboExamle1"
                :combo-title="`Select Exmaple1`"
                :combo-name="`example1`"
                :combo-options="options"
                :placeholder="`선택하세요`"
            ></combo-box>
        </div>

        <h3 class="guide-stitle">2. Selected</h3>
        <div class="guide-info">부여할 option 목록에서 "selected: true" 추가</div>
        <div class="guide-info script">
            <pre>
<span class="tag">const</span> <span class="evt">options2</span> = <span class="func">ref</span><span class="mark">(</span><span class="func">[</span>
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option1'</span>, <span class="props">value:</span> <span class="val">'1'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option2'</span>, <span class="props">value:</span> <span class="val">'2'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option3'</span>, <span class="props">value:</span> <span class="val">'3'</span>, <span class="props">selected:</span> <span class="tag">true</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option4'</span>, <span class="props">value:</span> <span class="val">'4'</span> <span class="braket">}</span>,
    <span class="braket">{</span> <span class="props">label:</span> <span class="val">'Select option5'</span>, <span class="props">value:</span> <span class="val">'5'</span> <span class="braket">}</span>,
<span class="func">]</span><span class="mark">)</span>;
</pre>
        </div>
        <div class="guide-cont">
            <combo-box
                id="comboExamle2"
                :combo-title="`Select Exmaple2`"
                :combo-name="`example2`"
                :combo-options="options2"
                :placeholder="`선택하세요`"
            ></combo-box>
        </div>
    </div>
</template>
