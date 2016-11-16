import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import SideNav from './components/Side-Nav';
import TopBar from './components/top-bar';
import MainContent from './components/main-content';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import PostCreate from './components/post-create';
import Editor from './components/Editor';


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.component('v-editor', Editor);
Vue.component('post-create', PostCreate);
Vue.component('Hello', Hello);
Vue.component('Hello2', Hello2);
Vue.component('Side-Nav', SideNav);
Vue.component('top-bar', TopBar);
Vue.component('main-content', MainContent);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
  { path: '/1-1', component: Hello },
  { path: '/1-2', component: PostCreate },
  ],

});
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
