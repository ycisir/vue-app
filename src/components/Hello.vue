<script setup>
import { ref, reactive, computed } from 'vue';

// getting data through prop
defineProps({
	item: String
})

// const isActive = ref(false);
// const num = ref(55);
// const type = ref("A");
// const visible = ref(false);

// setTimeout(()=> {
// 	isActive.value=true;
// 	visible.value=true;
// },3000)




// v-for --- arr
// const students = ref(['ron', 'harry', 'hermoine', 'ginny']);


// v-for with v-if
// const employees = ref([
// 	{
// 	id: "7",
// 	name: "harry",
// 	salary: 19000
// 	},
// 	{
// 	id: "22",
// 	name: "ron",
// 	salary: 17000
// 	},
// 	{
// 	id: "18",
// 	name: "hermoine",
// 	salary: 19000
// 	},
// 	{
// 	id: "6",
// 	name: "ginny",
// 	salary: 15000
// 	},
// ])




// arr of arrs
// const languages = ref([
// 	['ruby', 'java', 'python'],
// 	['c++', 'javascript', 'php']
// ])




// key value
// const course = reactive({
// 	title: "learn vue js",
// 	duration: "1 monts",
// 	fees: "free"
// })




// obj of objs
// const frameworks = reactive({
// 	vuejs : {
// 		id: 1,
// 		title: "learn vueks"
// 	},

// 	django: {
// 		id: 2,
// 		title: "learn django"
// 	},

// 	ror: {
// 		id: 3,
// 		title: "learn ror"
// 	},

// 	laravel: {
// 		id: 4,
// 		title: "learn laravel"
// 	}
// })



// computed property
// const salaryGreaterThan = computed(()=> {
// 	return employees.value.filter((employee) => employee.salary >= 19000);
// })




// method
// function higherSalary(emps) {
// 	return emps.filter((emp) => emp.salary >= 19000);
// }








// event handling
// 1.inline handling
// 2.method handling

// 1
// const count = ref(0);

// function say(e) {
// 	console.log("event:", e);
// }

// accessing event argument using event variable
// function say(str, e) {
// 	console.log("Hello,",str);
// 	console.log("event: ",e);
// }




// 2
// function say(e) {
// 	console.log("event:", e);
// }





// event modifiers
// function checkData(e) {
// 	// e.preventDefault()
// 	console.log('check data')
// }


// function onSubmit() {
// 	console.log('form submited...')
// }



// key modifier
// function onPressEnter() {
// 	console.log('you press enter')
// }



// system modifier
// function onPressAltEnter() {
// 	console.log('key pressed')
// }


// function onCtrlClick() {
// 	console.log('key pressed')
// }





// exact modifier
// function onCtrlClick() {
// 	console.log('key pressed')
// }


// function onNoSys() {
// 	console.log('key pressed')
// }


function onLeftClick() {
	console.log('left click event')
}

function onRighttClick() {
	console.log('right click event')
}

</script>


<template>
	<!-- <h3 class="textYellow bg-black">Hello component</h3> -->

	<!-- v-if directive -->
	<!-- <h1 v-if="isActive">Authorized</h1> -->
	<!-- <h1 v-else>Not authorized</h1> -->

	<!-- v-show not removed from dom just set display none if false -->
<!-- 	<h1 v-show="false">number is 5</h1>

	<template v-if="visible">
		<ul>
			<li>abc</li>
			<li>abc</li>
			<li>abc</li>
		</ul>
	</template> -->



	<!-- v-for --- key use for handle state vue recommend to use key to identify vnodes and key is special attribute-->

	<!-- <h1>Honar students of houghwarts</h1>
	<ul v-for="(student, i) in students" :key="i">
		<li>{{ i }} --- {{ student }}</li>
	</ul> -->




	<!-- array of objects -->
	<!-- <h1>Employees</h1>
	<div v-for="(emp, i) in employees" :key="i">
		<p>id: {{ emp.id }}</p>
		<p>name: {{ emp.name }}</p>
		<p>salary: {{ emp.salary }}</p>
	</div> -->


<!-- 	<h1>Employees</h1>
	<div v-for="({id, name, salary}, i) in employees" :key="i">
		<p>{{ i }}</p>
		<p>id: {{ id }}</p>
		<p>name: {{ name }}</p>
		<p>salary: {{ salary }}</p>
	</div> -->







	<!-- arr of arrs -->

<!-- 	<template v-for="(language, outerIndex) in languages" :key="outerIndex">
		<h4 v-for="(item, innerIndex) in language">{{ outerIndex }}, {{innerIndex }} --- {{ item }}</h4>
		<hr>
	</template> -->




	<!-- key value -->
<!-- 		<hr>
		<h4 v-for="(value, key, i) in course" :key="i">{{ i }} - {{ key }}: {{ value }}</h4> -->



		<!-- obj of objs -->
<!-- 		<div v-for="framework in frameworks" :key="framework.id">
			{{ framework.id }}: {{ framework.title }} 
		</div> -->

		<!-- destructure -->
<!-- 		<div v-for="{id, title} in frameworks" :key="id">
			{{ id }}: {{ title }} 
		</div> -->







	<!-- <h1>Employees</h1> -->
<!-- 	<template v-for="({id, name, salary}, i) in employees" :key="i">
		<template v-if="salary >= 19000">
			<p>id: {{ id }}</p>
			<p>name: {{ name }}</p>
			<p>salary: {{ salary }}</p>
		</template>
	</template> -->


	<!-- computed with v-for -->
<!-- 	<template v-for="({id, name, salary}, i) in salaryGreaterThan" :key="i">
		<template v-if="salary >= 19000">
			<p>id: {{ id }}</p>
			<p>name: {{ name }}</p>
			<p>salary: {{ salary }}</p>
		</template>
	</template> -->


	<!-- method with v-for -->
<!-- 	<template v-for="({id, name, salary}, i) in higherSalary(employees)" :key="i">
		<template v-if="salary >= 19000">
			<p>id: {{ id }}</p>
			<p>name: {{ name }}</p>
			<p>salary: {{ salary }}</p>
		</template>
	</template> -->




	<!-- <h3>Hello component</h3> -->


	<!-- getting data from app component through prop -->
	<!--<h3>data of student {{ item }}</h3>-->





	<!-- event handling -->
	 <br>
	<!-- <button @click="count++">Increase</button>
	count: {{ count }}
	<button @click="count--">Decrease</button> -->


	<!-- count: {{ count }} -->
	<!-- <input type="text" v-on:focusin="count++" v-on:focusout="count--"> -->

	<!-- <button @click="say()">click</button> -->
	<!-- <button @click="say('bye...')">click</button> -->
	<!-- <button @click="say('harry',$event)">click</button> -->


	<!-- arraow function -->
	<!-- <button @click="(event)=> say('jack',event)">click</button> -->


	<!-- method handling -->
	<!-- <button @click="say">click</button> -->




	<!-- event modifiers -->
	 <!-- <a @click.prevent="checkData" href="https://www.google.com/">go to google</a> -->

	<!-- <form @submit.prevent="onSubmit">
		<button type="submit">submit</button>
	</form> -->




	<!-- key modifier -->
	 <!-- <input @keyup.enter="onPressEnter" type="text"> -->



	 <!-- system modifier -->
	 <!-- <input @keyup.alt.enter="onPressAltEnter" type="text"> -->
	 <!-- <input @keyup.ctrl="onCtrlClick" type="text"> -->



	 <!-- exact modifier -->
	  <!-- <button @click.ctrl.exact="onCtrlClick">click</button> -->


	  <!-- <button @click.exact="onNoSys">click</button> -->


	  <!-- <input @click.left="onLeftClick" type="text"> -->

	<!-- multiple event -->
	  <!-- <button v-on="{ right: onRighttClick, left: onLeftClick }">click</button> -->
	  
	 <!-- multiple handling -->
	  <!-- <button @click="{ firstEvent(), secondEvent() }">click</button> -->


</template>

<style>
/*	.text-red {
		color: red;
	}*/
</style>