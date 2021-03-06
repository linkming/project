module.exports = {
  description: '视图层',
  prompts: [
    {
      type: 'input',
      name: 'routerPath',
      // 这里要加正则校验
      // validate: function (value) {
      //   if ((/^[a-z][A-Z]+$/).test(value)) { return true }
      //   return '路由路径必须由小写字母或-组成'
      // },
      message: '路由的路径全部由小写字母或-命名'
    }
  ],
  actions: data => {
    const {routerPath} = data
    const actions = [
      {
        type: 'add',
        path: `src/view/${routerPath}/index.vue`,
        templateFile: './plop-templates/view/index.hbs',
        data: {
          name: routerPath
        }
      }
    ]
    return actions
  }
}
