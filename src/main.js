import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

app.mount('#app');
// createApp(App).use(router).mount('#app');
