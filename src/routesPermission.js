import router from "./router";
import store from "./store";
import { otherRoutes } from "./router";

import { filterAsyncRoutes } from "./asyncRouter";

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const hasToken = store.state.token;
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      const route = store.state.routes;
      if (route.length > 0) {
        next();
      } else {
        try {
          const roles = store.state.roles;  // 获取账号权限
          // 过滤routes 拿到有权限的route
          const passRoutes = filterAsyncRoutes(otherRoutes, roles);
          store.commit("changeRoutes", passRoutes)
          console.log("passRotes", router);
          router.addRoutes(passRoutes);  // 动态添加需要权限的路由
          next({...to, replace: true});
        } catch (err) {
          next({ path: "/login" });
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});
