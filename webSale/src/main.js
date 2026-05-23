import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Menu from './components/menu/Menu.vue'
import router from "./routes/Routes"
const app = createApp(App);
app.use(router);
app.component("Menu",Menu);
app.mount('#app')
