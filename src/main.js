import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueSplide)

app.mount('#app')
