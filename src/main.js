// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App :user="this.user"/>',
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/home',
      responseType: 'stream',
    })
      .then((response) => {
        this.user = response;
        console.log(response);
      });
  },

});
