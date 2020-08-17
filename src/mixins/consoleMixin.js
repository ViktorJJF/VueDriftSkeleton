import Vue from 'vue';
if (process.env.NODE_ENV === 'development') {
  Vue.mixin({
    computed: {
      console: () => console,
    },
  });
}
