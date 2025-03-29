<script setup>
import { reactive, ref } from 'vue';


// const fullname = ref("");
const formData = reactive({
    fullname: "",
    email: "",
    password: "",
    message: "",
    term: "",
    hobbies: [],
    gender: '',
    post: '',
    locations: [],
    state: '',
    fees: '',
})

const stateOptions = ref([
    {text: "Nagpur", value: "Nagpur"},
    {text: "Mumbai", value: "Mumbai"},
    {text: "Pune", value: "Pune"},
    {text: "Bangalore", value: "Bangalore"},
    {text: "Hyderabad", value: "Hyderabad"},
])

function handleFormSubmit() {
    console.log("form submited...", formData)
}

</script>

<template>
    <p>{{ formData }}</p>
    <h1>Form in vuejs</h1>
    <form @submit.prevent="handleFormSubmit">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model.trim="formData.fullname" />
        </div>

        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" />
        </div>

        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="formData.password" />
        </div>

        <div>
            <label for="message">Message:</label>
            <textarea name="message" id="message" v-model="formData.message"></textarea>
        </div>

        <div>
            <label for="term">T&C</label>
            <!-- <input type="checkbox" id="term" v-model="formData.term"> -->
            <input type="checkbox" id="term" v-model="formData.term" true-value="yes" false-value="no">
        </div>

        <div>
            <span>Hobbies: </span>
            <label for="cooking">Cooking</label>
            <input type="checkbox" id="cooking" v-model="formData.hobbies" value="cooking">

            <label for="running">Running</label>
            <input type="checkbox" id="running" v-model="formData.hobbies" value="running">

            <label for="coding">Coding</label>
            <input type="checkbox" id="coding" v-model="formData.hobbies" value="coding">
        </div>

        <div>
            <span>Gender: </span>
            <label for="male">Male</label>
            <input type="radio" id="male" v-model="formData.gender" value="male">

            <label for="female">Female</label>
            <input type="radio" id="female" v-model="formData.gender" value="female">
        </div>

        <div>
            <span>Posts: </span>
            <select v-model="formData.post">
                <option disabled value="">Please select</option>
                <option>Intern</option>
                <option>Junior</option>
                <option>Senior</option>
            </select>
        </div>

        <div>
            <span>Locations: </span>
            <select v-model="formData.locations" multiple>
                <option>Nagpur</option>
                <option>Mumbai</option>
                <option>Pune</option>
            </select>
        </div>

        <div>
            <span>State: </span>
            <select v-model="formData.state">
                <option disabled value="">Please select</option>
                <option v-for="state in stateOptions" :value="state.value">{{ state.text }}</option>
            </select>
        </div>

        <div>
            <label for="fees">Fees: </label>
            <input type="text" id="fees" v-model.number="formData.fees">
            {{ typeof formData.fees }}
            <p>{{ formData.fees }}</p>
        </div>

        <button>Submit</button>
    </form>
</template>

<style scoped></style>