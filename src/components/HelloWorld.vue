<script setup>
  import { reactive, ref, isRef, isReactive, isProxy, unref, toRef, toRefs, computed, useCssModule } from 'vue';

  // const msg = "Hello, World!";

  // attribute binding
  // const empId = 1;
  // const url = "#";

  // dynamic attribute binding 
  // const objOfAttrs = {
  //   id: 99,
  //   href: "#"
  // }

  // dynamic arguments
  // const link = "href";

  // boolean attributes
  // const isDisabled = false;

  
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


  // const obj3 = ref({count: ref(0)});
  
  // setTimeout(()=>{
  //   console.log("obj3 ",obj3);
  //   console.log("obj3.value ",obj3.value);
  //   console.log("obj3.value.count ",obj3.value.count);
  //   obj3.value.count++;
  // },3000);






  // let a=10;
  // let b=ref(20); //most used
  // let c=reactive({count:1}); //most used
  // console.log(a);
  // console.log(isRef(a)); //most used
  // console.log(b);
  // console.log(isRef(b));
  // console.log(c);
  // console.log(isReactive(c)); //most used
  // console.log(isReactive(b));
  // console.log(isProxy(b));
  // console.log(isProxy(c));
  // console.log("b: ",b);
  // console.log("b: ",unref(b)); //sometime used

  // let student = reactive({
  //   name: "harry",
  //   roll: 7
  // });

  // console.log(student);
  // console.log(isReactive(student));
  // console.log(student.name);
  // console.log(isReactive(student.name));
  // console.log(isRef(student.name));
  // let nameRef = toRef(student, "name");
  // console.log(nameRef);
  // console.log(isRef(nameRef));
  // console.log(student);
  // let studentAsRef = toRefs(student);
  // console.log(studentAsRef);
  // console.log(isRef(studentAsRef.name));
  // console.log(studentAsRef.name.value);
  // console.log(isRef(studentAsRef.roll));
  // console.log(studentAsRef.roll.value);




  // method and computed property
  // let firstName = ref("Ron");
  // let lastName = ref("Weasely");

  // const fullName = ()=> {
  //   return firstName.value +' '+ lastName.value;
  // }

  // setTimeout(()=> {
  //   console.log("setTimeout called");
  //   firstName.value="Ginny";
  // },3000);


  // computed property (faster as compared to method bcz it will cache the data if same)
  // only readable (getter -only)
  // let firstName = ref("Ron");
  // let lastName = ref("Weasely");
  // const fullName = computed(() => {
  //   console.log("getter called")
  //   return firstName.value +" "+ lastName.value;
  // });

  // for setter
  // const fullName = computed({
  //   get() {
  //     console.log("getter called");
  //     return firstName.value +" "+ lastName.value;
  //   },

  //   set(newValue) {
  //     console.log("setter called");
  //     [firstName.value, lastName.value] = newValue.split(" ");
  //   },
  // });

  // console.log(isRef(fullName));

  // setTimeout(()=> {
  //   console.log("setTimeout called");
  //   // firstName.value="Ginny";
  //   fullName.value = "Harry Potter";
  // },3000);






  // class and style binding for css
  // const fg = ref("white");
  // const bg = ref("black")

  // setTimeout(()=>{
  //   console.log(fg);
  //   fg.value = "black";
  //   bg.value = "red";
  // },3000)


  // const styleObj = reactive({
  //   color: "red",
  //   backgroundColor: "yellow"
  // });

  // const fontObj = reactive({
  //   fontSize: "23px",
  //   margin: "30px",
  //   textAlign: "center"
  // });


  // const isActive = ref(true);
  // const isImportant = ref(true);

  // const classObj = reactive({
  //   active:false,
  //   textWhite: false,
  //   fBold: false,
  //   iText: false
  // })

  // setTimeout(()=>{
  //   console.log("called............")
  //   // isActive.value = true;
  //   // isImportant.value = true;


  //   // classObj.active= true;
  //   // classObj.textWhite=  true;
  //   // classObj.fBold=  true;
  //   // classObj.iText=  true;


  //   isActive.value = true;
  //   isImportant.value = true;
  //   console.log(isActive.value);
  //   console.log(isImportant.value);
  //   // iText = true

  // },3000);

  // const myClass = computed(()=> {
  //     active: isActive.value;
  //     fBold: isImportant.value;
  // });


  // console.log(useCssModule("classes"))
  // console.log(useCssModule()) //without name if use $style


  const theme = { textColor: "red"};

</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

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
  <!-- <p>ref example</p> -->
  <!-- <p>sum {{ a + b }}</p> -->

  <!-- <p>count: {{ obj1.count }}</p> -->
  <!-- <p>count: {{ obj2.count }}</p> -->
  <!-- <p>count: {{ obj2.count.value + 19 }}</p> -->
  <!-- <p>count: {{ count + 19 }}</p> -->
  <!-- <p>count: {{ obj3.count }}</p> -->


  <!-- method and computed property -->
  <!-- <h3>{{ fullName() }}</h3> -->
  <!-- <h3>{{ fullName }}</h3> -->


  <!-- class and style binding for css -->
  <!-- style binding -->
  <!-- <h3 :style="{color:fg, backgroundColor:bg}">Hello world!</h3> -->
  <!-- <h3 :style="[styleObj, fontObj]">Another Hello world!</h3> -->


  <!-- class binding -->
  <!-- <p class="textWhite" :class="{active: isActive, fBold: isImportant}">Authorized</p> -->
  <!-- in this parent component class will apply to root attr in child component if you want to use child attr also  -->
  <!-- then we use $attrs -->


  <!-- <p class="innerClass1" :class="$attrs.class">Hello vuejs</p>root -->
  <!-- <p class="innerClass2">No love for reactjs</p> -->

  <!-- <div>root -->
    <!-- <h1>abc</h1> -->
    <!-- <p>text</p> -->
  <!-- </div> -->



  <!-- css in vuejs -->
  <!-- in scoped parent component class applied to their child component root element but not vice versa -->
  <!-- <div> -->
    <!-- css module -->
    <!-- <h3 :class="$style.active">HelloWorld component</h3> -->
    
    <!-- custom inject css module -->
    <!-- <h3 :class="classes.active">HelloWorld 2</h3>   -->

  <!-- </div> -->

  <h3 class="textRed">Hello world component</h3>
</template>

<style module="classes">
  .active {
    background-color: green;
  }

  .textWhite {
    color: white;
  }

  .textRed {
    color:v-bind(theme.textColor)
  }

  .fBold {
    font-weight: bold;
  }

  .iText {
    font-style: italic;
  }

</style>
