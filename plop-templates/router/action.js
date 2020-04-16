const { splitRouterName } = require('../utils.js')
module.exports = {
  description: '路由生成器',
  prompts: [{
    type: 'list',
    name: 'rootPath',
    message: '生成路由的目录',
    choices: [
      'menu', 'libs'
    ]
  },
  {
    type: 'list',
    name: 'routerLevel',
    message: '选择路由级别,lib下暂不需要二级路由,',
    choices: [
      '一级路由', '二级路由'
    ]
  },
  {
    type: 'input',
    name: 'routerPath',
    // 这里要加正则校验
    validate: function (value) {
      if ((/^[a-z|-]+$/).test(value)) { return true }
      return '路由路径必须由小写字母或-组成'
    },
    message: '路由的路径全部由小写字母或-命名'
  }
  ],
  actions: data => {
    const {rootPath, routerPath, routerLevel} = data
    const actions = [
      {
        type: 'add',
        path: `src/router/${rootPath}/${splitRouterName(routerPath).component}/index.js`,
        templateFile: './plop-templates/router/index.hbs',
        data: {
          name: routerLevel === '一级路由' ? routerPath : routerPath.split('-')[0] + routerPath.split('-')[1],
          path: '/' + splitRouterName(routerPath).component
        }
      },
      {
        type: 'add',
        path: `src/view/${splitRouterName(routerPath).component}/index.vue`,
        templateFile: './plop-templates/view/index.hbs',
        template: '{{dashCase name}}',
        data: {
          name: routerLevel === '一级路由' ? routerPath : routerPath.split('-')[0] + routerPath.split('-')[1],
          component: () => import('@/views/' + splitRouterName(routerPath).component + '/404'),
          path: '/' + splitRouterName(routerPath).component
        }
      }
    ]
    return actions
  }
}
