exports.notEmpty = name => {
  return v => {
    if (!v || v.trim === '') {
      return `${name} is required`
    } else {
      return true
    }
  }
}
exports.splitRouterName = () => {
  return routerName => {
    if (routerName.indexOf('-') < 0) {
      return {
        name: routerName,
        path: './' + routerName,
        component: routerName
      }
    } else {
      const routesArr = routerName.split('-')
      var component = ''
      // eslint-disable-next-line no-unused-vars
      var routes = ''
      routesArr.forEach(item => {
        routes += item
        component += (item + '/')
      })
      return {
        name: routerName,
        path: './' + routerName,
        component
      }
    }
  }
}
