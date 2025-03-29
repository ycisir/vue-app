<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Hello from './components/Hello.vue'
import { ref } from 'vue'
import FormComponent from './components/FormComponent.vue';
import PropsComponent from './components/PropsComponent.vue';
import { Person } from './services/person';
//text interpolation
const on = false;

// passing data using prop to another component
// const students = ref(['harry', 'hermoine', 'ron'])
// const fullName = ref("");
// const firsName = ref("jack");
// const lastName = ref("sparrow");

// setTimeout(()=>{
//   // fullName.value = "Jack sparrow";
//   firsName.value = "jack";
//   lastName.value = "sparrow";
// }, 3000)



// binding multiple properties using object
// const employee = {
//   name: "jack",
//   company: "microsoft"
// }





// custom class 
const person = new Person("harry", "potter");


</script>

<template>
  <HeaderSection />
  <!-- <HelloWorld class="parentClass"/> -->
  <!-- <Hello v-for="n in 5" :key="n"/> -->
  <!-- <h3 class="text-red bg-black">app component</h3> -->

  <!-- passing data through props -->
  <!-- <Hello v-for="(student, i) in students" :key="i" :item="student" /> -->
  
  
  <!-- <Hello /> -->

  <!-- global component example -->
  <!-- {{ on ? "dark mode" : "light mode" }} -->

  <!-- <FormComponent /> -->



  <!-- passing props  -->
  <!-- statis prop -->
   <!-- one way data flow -->
  <!-- <PropsComponent fullName="Harry potter" />  -->

  <!-- dynamic prop -->
  <!-- <PropsComponent :first-name="firsName" :last-name="lastName" />  -->


  <!-- prop validation -->
   <!-- use colon if want to send number type in age -->
    <!-- <PropsComponent full-name="Harry potter" :age="21" /> -->
    <!-- <PropsComponent :age="21" /> -->


    <!-- boolean casting -->
  <!-- <PropsComponent :is-logout="true" /> -->


  <!-- arr and objects -->
   <!-- <PropsComponent :cities="['Nagpur', 'Mumbai', 'Pune']" /> -->
   <!-- <PropsComponent :employee="{ name: 'harry', company: 'houghwarts' }" /> -->


   <!-- binding multiple properties using object  -->
   <!-- <PropsComponent v-bind="employee" /> -->




   <!-- custom validator  -->
  <!-- <PropsComponent name="harry" :age="99" /> -->




  <!-- custom class  -->
  <PropsComponent :author="person"  />




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
