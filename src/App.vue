<script setup>
import HelloWorld from './components/HelloWorld.vue'

//text interpolation
const on = false;
</script>

<template>
  <HeaderSection />
  <HelloWorld class="parentClass"/>

  <!-- global component example -->
  <!-- {{ on ? "dark mode" : "light mode" }} -->
</template>

<style scoped>

</style>
