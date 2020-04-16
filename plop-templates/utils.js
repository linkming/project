exports.notEmpty = name => {
  return v => {
    if (!v || v.trim === '') {
      return `${name} is required`
    } else {
      return true
    }
  }
}
exports.splitRouterName = routerName => {
  if (routerName.indexOf('-') < 0) {
    return {
      name: routerName,
      path: './' + routerName + 'js',
      component: routerName
    }
  } else {
    const routesArr = routerName.split('-')
    var component = ''
    var name = ''
    routesArr.forEach(item => {
      name += item
      component += (item + '/')
    })
    return {
      name: routerName,
      path: './' + routerName + 'js',
      component
    }
  }
}
