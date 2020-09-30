import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './routes';


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
