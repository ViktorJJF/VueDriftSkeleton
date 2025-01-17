import Vue from 'vue';
import Vuex from 'vuex';
import modules from '@/store/modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: modules,
  state: {
    snackbar: {
      text: '',
      active: false,
      color: 'success',
    },
    toolbar: {
      drawerIcon: null,
    },
    overlay: {
      active: false,
    },
  },
});
