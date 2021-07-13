import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

// import Vue from 'vue';
// import App from './App.vue';
// // import router from './router';
// // import store form './store';
// import vuetify from './plugins/vuetify';
// import './plugins/vue-axios';
//
//
// Vue.config.productionTip = false;
//
// new Vue({
//   // router,
//   // store,
//   vuetify,
//   render: h => h(App),
// }).$mount('#app');
