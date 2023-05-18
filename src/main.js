import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

createApp(App).use(router).mount('#app')

axios.defaults.baseURL = 'http://192.168.0.62:8080/'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Acces-Control-Allow-Origin'] = '*'
