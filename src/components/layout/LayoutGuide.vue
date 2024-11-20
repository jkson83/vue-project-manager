<script setup>
import { onBeforeMount, onUnmounted } from 'vue';
import NaviGuide from '@/components/layout/NaviGuide.vue';

const guideLayout = (_srt) => {
    let wrap = document.querySelector('#app');

    if (_srt == 'in') {
        wrap.classList.add('guide');
    } else if (_srt == 'out') {
        wrap.classList.remove('guide');
    }
};

onBeforeMount(() => {
    guideLayout('in');
});

onUnmounted(() => {
    guideLayout('out');
});
</script>

<template>
    <aside class="aside">
        <header class="header">
            <div class="header-inner">
                <h1>Guide</h1>

                <!-- <router-link class="header-link" :to="{ path: '/worklist' }">WORKING LIST</router-link> -->
            </div>
        </header>
        <navi-guide></navi-guide>
    </aside>

    <main class="container">
        <router-view></router-view>
    </main>
</template>
