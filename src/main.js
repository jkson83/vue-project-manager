import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App); //vue 인스턴스를 생성
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app'); //인스턴스를 실행할 컨텐이너를 설정
import 'bootstrap/dist/js/bootstrap.js';
