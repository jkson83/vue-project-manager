<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">- About</router-link>
    <router-link to="/list">- List</router-link>
    <router-link to="/Nested">- Nested</router-link>
  </nav>
  <div class="article">
  <router-view />
  </div>
</template>
