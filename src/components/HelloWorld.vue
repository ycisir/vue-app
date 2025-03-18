<script setup>
  import { reactive } from 'vue';
  import { ref } from 'vue';

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

  
  //reactivity
  // 1st: without reactivity
  // const num = {a:100, b:200};

  // setTimeout(()=> {
  //   console.log("setTimeout called");
  //   console.log("num: ",num);
  //   num.a=300;
  //   console.log("a: ",num.a);
  // }, 3000);

  // let count = 0;
  // setTimeout(()=> {
  //   count++;
  //   console.log("count ",count);
  // },3000);



  // 2nd: with reactivity
  // const num = reactive({a:100, b:19});
  // setTimeout(()=>{
  //       console.log("setTimeout called");
  //       console.log("num: ",num);
  //       num.b=99;
  //       console.log("b: ",num.b);
  // },3000);

  // let num = reactive({count:0});
  // setTimeout(()=> {
  //   console.log("num ",num);
  //   num.count++;
  //   console.log("count ",num.count);
  // },3000);




  // deep reactivity
  // const obj = reactive({
  //   num: {count: 0},
  //   user: ['jack', 'harry']
  // });

  // setTimeout(()=>{
  //   console.log("obj", obj);
  //   console.log("obj.num",obj.num);
  //   console.log("obj.user",obj.user);
  //   obj.num.count++;
  //   obj.user.push("hermoine");
  // },3000);





  // ref
  // const a = ref(100);
  // const b = ref(19);

  // setTimeout(()=>{
  //   console.log("a ",a);
  //   console.log("b ",b);
  //   console.log("a.value ",a.value);
  //   console.log("b.value ",b.value);
  //   b.value = 99;
  // },3000);


  // object
  // const obj1 = ref({count:0});
  // setTimeout(()=>{
  //   console.log(obj1);
  //   console.log(obj1.value);
  //   console.log(obj1.value.count);
  //   obj1.value.count++;
  // },3000);

  // const obj2 = {count: ref(0)};
  // setTimeout(()=>{
  //   console.log(obj2);
  //   console.log(obj2.count);
  //   console.log(obj2.count.value);
  //   obj2.count.value++;
  // },3000);

  // let { count } = obj2;


  const obj3 = ref({count: ref(0)});
  
  setTimeout(()=>{
    console.log("obj3 ",obj3);
    console.log("obj3.value ",obj3.value);
    console.log("obj3.value.count ",obj3.value.count);
    obj3.value.count++;
  },3000);


</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- attribute binding -->
  <!-- <p v-bind:id="empId">to see id please do inspect</p> same as below--> 
  <!-- <p :id="empId">v-bind example</p> -->
  <!-- <a :href="url">v-bind example1</a><br> -->
  <!-- <a :id="empId" :href="url">v-bind example3</a><br> -->

  <!-- dynamic attribute binding  -->
  <!-- <a v-bind="objOfAttrs">multiple attrs v-bind example3</a><br> -->

  <!-- dynamic arguments -->
  <!-- <a :[link]="url">dynamic arguments example</a><br> -->

  <!-- boolean attributes -->
  <!-- <button :disabled="isDisabled">click here</button><br> -->


  <!-- <p>reactivity example</p> -->
  <!-- reactivity -->
  <!-- <p>sum: {{ num.a + num.b }}</p> -->
  <!-- <p>count: {{ num.count }}</p> -->


  <!-- <p>deep reactivity example</p> -->
  <!-- deep reactivity -->
  <!--   <p>count: {{ obj.num.count }}</p>
  <p>user: {{ obj.user }}</p> -->


  <!-- ref() example -->
  <p>ref example</p>
  <!-- <p>sum {{ a + b }}</p> -->

  <!-- <p>count: {{ obj1.count }}</p> -->
  <!-- <p>count: {{ obj2.count }}</p> -->
  <!-- <p>count: {{ obj2.count.value + 19 }}</p> -->
  <!-- <p>count: {{ count + 19 }}</p> -->
  <p>count: {{ obj3.count }}</p>



</template>

<style scoped></style>
