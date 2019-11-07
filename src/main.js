// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../static/css/reset.css'
import vueTap from 'v-tap'
import router from './router'
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
// import Dialog from 'vant';
import store from './store';
import {Swipe,SwipeItem} from 'vant'
import { Lazyload } from 'vant';
import { Dialog } from 'vant';
// import { PullRefresh } from 'vant';
// import store from './store';
// import 'lib-flexible/flexible';
// import { Dialog } from 'vant';
// import { PullRefresh } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu)
  .use(DropdownItem);
Vue.use(Vant);
Vue.use(Dialog);
Vue.config.productionTip = false
Vue.use(vueTap)
Vue.use(DropdownMenu)
  .use(DropdownItem);
Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload);
// Vue.use(PullRefresh);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
