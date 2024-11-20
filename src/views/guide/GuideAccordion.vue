<script setup>
import AccordionItem from '@/components/AccordionItem.vue';
</script>

<template>
    <div class="contents">
        <h2 class="guide-title">Accordion</h2>

        <h3 class="guide-stitle">1. Basic</h3>
        <div class="guide-info script">
            <pre>
<span class="comment">// component import</span>
<span class="import">import</span> <span class="props">AccordionItem</span> <span class="import">from</span> <span class="val">'@/components/AccordionItem.vue'</span>;
</pre>
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">accordion-item</span> <span class="props">id</span>="<span class="val">Acco1</span>"<span class="arrow">&gt;</span>
    <span class="comment">&lt;--! 제목 --&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">accoTitle</span><span class="arrow">&gt;</span>Accordion Title<span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
    <span class="comment">&lt;--! 내용 --&gt;</span>
    <span class="arrow">&lt;</span><span class="tag">template</span> #<span class="props">accoPanel</span><span class="arrow">&gt;</span>
        Accordion contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Accordion contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Accordion contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Accordion contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Accordion contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
        Accordion contents<span class="arrow">&lt;</span><span class="tag">br</span> <span class="arrow">/&gt;</span>
    <span class="arrow">&lt;/</span><span class="tag">template</span><span class="arrow">&gt;</span>
<span class="arrow">&lt;/</span><span class="component">accordion-item</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <accordion-item id="Acco1">
                <!-- 제목 -->
                <template #accoTitle>Accordion Title</template>

                <!-- 내용 -->
                <template #accoPanel>
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                </template>
            </accordion-item>
        </div>

        <h3 class="guide-stitle">2. Opened(펼친 상태 유지; 접기 가능)</h3>
        <div class="guide-info">
            'AccordionItem' component에 <strong>:acco-option="{ opened: true }"</strong> 속성 추가
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">accordion-item</span> <span class="props">id</span>="<span class="val">Acco1</span>" :<span class="props">acco-option</span>="<span class="func">{</span> <span class="props">opened:</span> <span class="tag">true</span> <span class="func">}</span>"<span class="arrow">&gt;</span>
    <span class="arrow">...</span>
<span class="arrow">&lt;/</span><span class="component">accordion-item</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <accordion-item id="Acco2" :acco-option="{ opened: true }">
                <template #accoTitle>Accordion Title</template>
                <template #accoPanel>
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                </template>
            </accordion-item>
        </div>

        <h3 class="guide-stitle">3. Disabled(펼친 상태 유지; 접기 불가)</h3>
        <div class="guide-info">
            'AccordionItem' component에 <strong>:acco-option="{ disabled: true }"</strong> 속성 추가
        </div>
        <div class="guide-info html">
            <pre>
<span class="arrow">&lt;</span><span class="component">accordion-item</span> <span class="props">id</span>="<span class="val">Acco1</span>" :<span class="props">acco-option</span>="<span class="func">{</span> <span class="props">disabled:</span> <span class="tag">true</span> <span class="func">}</span>"<span class="arrow">&gt;</span>
    <span class="arrow">...</span>
<span class="arrow">&lt;/</span><span class="component">accordion-item</span><span class="arrow">&gt;</span>
</pre>
        </div>
        <div class="guide-cont">
            <accordion-item id="Acco3" :acco-option="{ disabled: true }">
                <template #accoTitle>Accordion Title</template>
                <template #accoPanel>
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                </template>
            </accordion-item>
        </div>

        <h3 class="guide-stitle">4. Accordion List</h3>
        <div class="guide-cont">
            <accordion-item id="Acco4-1">
                <template #accoTitle>Accordion Title1</template>
                <template #accoPanel>
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                </template>
            </accordion-item>
            <accordion-item id="Acco4-2">
                <template #accoTitle>Accordion Title2</template>
                <template #accoPanel>
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                </template>
            </accordion-item>
            <accordion-item id="Acco4-3">
                <template #accoTitle>Accordion Title3</template>
                <template #accoPanel>
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                    Accordion contents<br />
                </template>
            </accordion-item>
        </div>
    </div>
</template>
