<script setup>
import HeaderComp from '@/components/layout/HeaderComp.vue';
import FooterComp from '@/components/layout/FooterComp.vue';
</script>

<template>
    <header-comp></header-comp>
    <main class="container">
        <router-view></router-view>
    </main>
    <footer-comp></footer-comp>
</template>
