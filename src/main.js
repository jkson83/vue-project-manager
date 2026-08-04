import App from './App.vue';
import router from './router';
// Bootstrap CSS (순서 중요: bootstrap 먼저, bootstrap-vue-next 나중)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import './assets/main.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createBootstrap } from 'bootstrap-vue-next';



const app = createApp(App); //vue 인스턴스를 생성
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(createBootstrap()); // 필수: bootstrap-vue-next 플러그인 등록

app.mount('#app'); //인스턴스를 실행할 컨텐이너를 설정
