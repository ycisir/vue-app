<script setup>
  const msg = "Hello, World!";

  // attribute binding
  const empId = 1;
  const url = "#";

  // dynamic attribute binding 
  const objOfAttrs = {
    id: 99,
    href: "#"
  }

  // dynamic arguments
  const link = "href";

  // boolean attributes
  const isDisabled = false;
</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- attribute binding -->
  <!-- <p v-bind:id="empId">to see id please do inspect</p> same as below--> 
  <p :id="empId">v-bind example</p>
  <a :href="url">v-bind example1</a><br>
  <a :id="empId" :href="url">v-bind example3</a><br>

  <!-- dynamic attribute binding  -->
  <a v-bind="objOfAttrs">multiple attrs v-bind example3</a><br>

  <!-- dynamic arguments -->
  <a :[link]="url">dynamic arguments example</a><br>

  <!-- boolean attributes -->
  <button :disabled="isDisabled">click here</button><br>


</template>

<style scoped></style>
