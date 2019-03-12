import Vue from "vue";
import App from "./App.vue";
import iView from "iview";
import "iview/dist/styles/iview.css";
import router from "./router/router";
import "./assets/style/common.less";

Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
