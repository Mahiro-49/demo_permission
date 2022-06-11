function canGetRoutes(roles, route) {
  // 判断是否有权限
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles)
  } else {
    return true
  }
}

export function filterAsyncRoutes(routes, roles) {
  const res = []
  // 遍历路由 将可以查看的路由收集起来
  routes.forEach(route => {
    const item = { ...route }
    if (canGetRoutes(roles, item)) {
      if (item.children) {
        item.children = filterAsyncRoutes(item.children, roles)
      }
      res.push(item)
    }
  })
  return res
}