import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import Vue3Lottie from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';

loadFonts();

createApp(App).use(router).use(vuetify).use(Vue3Lottie).mount('#app');
