<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Hello from './components/Hello.vue'
import { ref } from 'vue'

//text interpolation
const on = false;

// passing data using prop to another component
const students = ref(['harry', 'hermoine', 'ron'])
</script>

<template>
  <HeaderSection />
  <HelloWorld class="parentClass"/>
  <!-- <Hello v-for="n in 5" :key="n"/> -->
  <!-- <h3 class="text-red bg-black">app component</h3> -->

  <!-- passing data through props -->
  <Hello v-for="(student, i) in students" :key="i" :item="student" />

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
