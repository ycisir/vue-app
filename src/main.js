import { createApp } from 'vue'
import App from './App.vue'
import HeaderSection from './components/HeaderSection.vue'

const app = createApp(App)
app.component("HeaderSection", HeaderSection)
app.mount('#app')