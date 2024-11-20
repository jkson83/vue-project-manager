import './assets/scss/common.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import uiGlobal from './assets/js/ui.global.js';

const app = createApp(App);

app.use(router);
app.use(uiGlobal);

app.mount('#app');
