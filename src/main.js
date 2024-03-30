import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import store from './configRouter'
import router from './router'
import  "./style/index.scss"

import './permission'
import App from './App.vue'
import ErrorMessage from "./components/comonComponent/ErrorMessage.vue"

const app = createApp(App)

app.use(router)
app.use(store())
app.component("ErrorMessage", ErrorMessage)
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"