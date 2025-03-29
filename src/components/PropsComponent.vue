<script setup>
import { computed, ref } from 'vue';
import { Person } from '@/services/person';

// declaring props 
// const props = defineProps(["fullName"]);
// const props = defineProps(["firstName", "lastName"]);
// console.log(props.firstName)
// console.log(props.lastName)
// local data property but disconnected from future updates
// const fname = ref(props.fullName);


// computed property --> auto updates when prop changes
// const fullName = computed(() => props.firstName+' '+props.lastName)
// console.log(fullName)


// prop validation
// const props = defineProps({
//     fullName: String,
//     age: Number
// });

// const props = defineProps({
//     fullName: {
//         type: String,
//         required: true,
//         default: "John cena"
//     },
//     age: {
//         type: Number,
//         required: true
//     }
// });




// boolean casting 
// const props = defineProps({
//     isLogout: Boolean
// })





// arr and objects
// const props = defineProps({
//     cities: Array,
//     employee: Object
// })



// binding multiple properties using object
// const props = defineProps({
//     name: String,
//     company: String
// })



// custom validator 
// const props = defineProps({
//     name: {
//         type: String,
//         // validator(propValue) {
//         //     return ["harry", "hermoine", "ron", "ginny"].includes(propValue);
//         // }
//         validator:(propValue)=>["harry", "hermoine", "ron", "ginny"].includes(propValue),
//     },
//     age: {
//         type: Number,
//         // validator: (propValue)=> propValue>0,
//         validator: (propValue)=> {
//             if(propValue >= 18 && propValue <=30){
//                 return true;
//             }
//             console.error("age should be between 18 and 30")
//             return false;
//         }
//     }
// })





// custom class
const props = defineProps({
    author: Person,
})

</script>

<template>
    <h3>props</h3>
    <p>props are custom attrs we can register in component in template we write it in kebab-case, props are readonly</p>
    <ul>
        <li>declaring props</li>
        <li>passing props</li>
        <li>using props</li>
    </ul>

    <!-- <h4>Name: {{ fullName }}</h4> -->
    <!-- <h4>Name: {{ fullName }}</h4> -->


    <!-- prop validation  -->
     <!-- <h3>Name: {{ fullName }}, Age: {{ age+1 }}</h3> -->



      <!-- boolean casting  -->
       <!-- <h3>Logout: {{ isLogout }}</h3> -->


       <!-- arr and objects -->
        <!-- <h3 v-for="city in cities">city: {{ city }}</h3> -->
        <!-- <h3>Name: {{ employee.name }}, company: {{ employee.company }}</h3> -->




        <!-- binding multiple properties using object -->
        <!-- <h3>Employee: {{ name }}, {{ company }}</h3> -->



        <!-- custom validator  -->

        <!-- <h3>Name: {{ name }}</h3> -->
        <!-- <h3>Age: {{ age+4 }}</h3> -->
        <!-- <h3>Age: {{ age }}</h3> -->





        <!-- custom class  -->
         <h3>author name: {{ author.firstName }} {{ author.lastName }}</h3>

</template>

<style scoped></style>