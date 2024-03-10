import { createApp } from 'vue'
import store from './configRouter'

// import './style.css'
import router from './router'

import './permission'
// import store from './store/index.js';
import App from './App.vue'
import ErrorMessage from "./components/comonComponent/ErrorMessage.vue"


const app = createApp(App)


app.use(router)
app.use(store())
app.component("ErrorMessage", ErrorMessage)
// app.use(store)
app.mount('#app')