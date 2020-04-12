import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Main" */ "../views/Login.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue")
  },
  {
    path: "/",
    name: "Main",
    redirect: "/CommodityList",
    component: () => import(/* webpackChunkName: "Main" */ "../views/Main.vue"),
    children: [
      {
        path: "/CommodityList",
        name: "CommodityList",
        meta: { breadCrumbs: ["商品", "主页"] },
        component: () =>
          import(
            /* webpackChunkName: "CommodityList" */ "../views/CommodityList.vue"
          )
      },
      {
        path: "/CommodityManage",
        name: "CommodityManage",
        meta: { breadCrumbs: ["商品", "商品管理"] },
        component: () =>
          import(
            /* webpackChunkName: "CommodityManage" */ "../views/CommodityManage.vue"
          )
      },
      {
        path: "/CommodityDetail",
        name: "CommodityDetail",
        meta: { breadCrumbs: ["商品", "商品详情"] },
        component: () =>
          import(
            /* webpackChunkName: "CommodityDetail" */ "../views/CommodityDetail.vue"
          )
      },
      {
        path: "/Profile",
        name: "Profile",
        meta: { breadCrumbs: ["用户", "个人信息"] },
        component: () =>
          import(/* webpackChunkName: "Profile" */ "../views/Profile.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
