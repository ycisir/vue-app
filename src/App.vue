<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Hello from './components/Hello.vue'

//text interpolation
const on = false;
</script>

<template>
  <HeaderSection />
  <HelloWorld class="parentClass"/>
  <Hello />
  <h3 class="text-red bg-black">app component</h3>

  <!-- global component example -->
  <!-- {{ on ? "dark mode" : "light mode" }} -->
</template>

<style scoped>
  /*.bg-black {
    background-color: black;
  }*/

/*  deep selector*/
  .bg-black, :deep(.bg-black) {
    background-color: black;
  }

  :global(.textYellow) {
    color: yellow;
  }
</style>
