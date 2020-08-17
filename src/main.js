import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//plugins
import '@/plugins/vue-gtag';
import '@/plugins/axios';
import '@/plugins/deepCopy';
import '@/plugins/uuid';
//end plugins

// Importing the global scss file
import '@/assets/scss/styles.scss';

// Importing mixins
import '@/mixins/consoleMixin';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
