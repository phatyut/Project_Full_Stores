import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from './addIcons/Icon.js'
import router from './routs/Routes.js'
import Menu from './components/menu/Menu.vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.component("Menu",Menu);
app.use(router);
app.mount('#app')



// events controller .html file