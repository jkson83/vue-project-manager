<script setup>
import TooltipItem from '@/components/TooltipItem.vue';
</script>

<template>
    <div class="contents">
        <h2 class="guide-title">Tooltip</h2>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// component import</span>
<span class="import">import</span> <span class="props">TooltipItem</span> <span class="import">from</span> <span class="val">'@/components/TooltipItem.vue'</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="comment">&lt;!-- tip-title: 스크린리더 용 title --&gt;</span>
<span class="arrow">&lt;</span><span class="component">tooltip-item</span> <span class="props">id</span>=<span class="val">"TipSample1"</span> <span class="props">:tip-title</span>="<span class="val">`개인정보 처리목적`</span>"<span class="arrow">&gt;</span>
    <span class="comment">// Tooltip contents</span>
    ...
<span class="arrow">&lt;/</span><span class="component">tooltip-item</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            개인정보 처리목적
            <tooltip-item id="TipSample1" :tip-title="`개인정보 처리목적`">
                개인정보 처리목적 : 보험계약 상담, 보험계약 인수여부 결정을 위한 판단 등
            </tooltip-item>
        </div>
    </div>
</template>
