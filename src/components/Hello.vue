<script setup>
import { ref } from 'vue';

const isActive = ref(false);
const num = ref(55);
const type = ref("A");
const visible = ref(false);

setTimeout(()=> {
	isActive.value=true;
	visible.value=true;
},3000)
</script>


<template>
	<!-- <h3 class="textYellow bg-black">Hello component</h3> -->

	<!-- v-if directive -->
	<h1 v-if="isActive">Authorized</h1>
	<h1 v-else>Not authorized</h1>

	<!-- v-show not removed from dom just set display none if false -->
	<h1 v-show="false">number is 5</h1>

	<template v-if="visible">
		<ul>
			<li>abc</li>
			<li>abc</li>
			<li>abc</li>
		</ul>
	</template>
</template>

<style>
/*	.text-red {
		color: red;
	}*/
</style>