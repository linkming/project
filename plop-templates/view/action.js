module.exports = {
  description: '视图层',
  prompts: [
    {
      type: 'input',
      name: 'routerPath',
      // 这里要加正则校验
      validate: function (value) {
        if ((/^[a-z][A-Z]+$/).test(value)) { return true }
        return '路由路径必须由小写字母或-组成'
      },
      message: '路由的路径全部由小写字母或-命名'
    }
  ],
  actions: data => {
    const {rootPath, routerPath} = data
    console.log(rootPath, routerPath)
    const actions = [
      {
        type: 'add',
        path: `src/view/${rootPath}/index.vue`,
        templateFile: './plop-templates/router/index.hbs',
        // template: '{{dashCase name}}',
        data: {
          name: rootPath
        //   script: data.blocks.includes('script'),
        //   style: data.blocks.includes('style')
        }
      }
    ]
    return actions
  }
}
