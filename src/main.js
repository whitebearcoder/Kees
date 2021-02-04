import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import vuetify from "@/plugins/vuetify";
import routes from "./router/index";

import "./sass/index.scss";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

import VueMoment from "vue-moment";
import moment from "moment-timezone";

Vue.use(VueMoment, {
  moment,
});

new Vue({
  el: "#app",
  router: router,
  vuetify,
  render: (app) => app(App),
});
