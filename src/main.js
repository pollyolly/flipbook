//Rapid Development Mode Setup
import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill' //Support edge //npm install babel-polyfill --save
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' //Fix md icons //npm install material-design-icons-iconfont --save
import Vuex from 'vuex'
import routing from './routing'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router: routing,
  render: h => h(App),
}).$mount('#app')
