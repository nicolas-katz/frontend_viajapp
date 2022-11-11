// import vue, vue-router
import * as Vue from "vue";
import * as VueRouter from "vue-router";

// import general css
import "./main.css";

// import components
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import DestinosView from "./views/DestinosView.vue";
import ItemView from "./views/ItemView.vue";
import NosotrosView from "./views/NosotrosView.vue";
import CotizacionVIew from "./views/CotizacionVIew.vue";
import NotFound from "./views/NotFound.vue";

// config routes
const routes = [
  { path: "/", name: "HomeRoute", component: HomeView },
  { path: "/destinos", name: "DestinosRoute", component: DestinosView },
  { path: "/destinos/:id", name: "ItemRoute", component: ItemView },
  { path: "/nosotros", name: "NosotrosRoute", component: NosotrosView },
  { path: "/cotizacion", name: "CotizacionRoute", component: CotizacionVIew },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

// create router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

// mount app
const app = Vue.createApp(App);
app.use(router);
app.mount("#app");
