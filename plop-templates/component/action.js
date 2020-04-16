module.exports = {
  description: '组件层',
  prompts: [
    {
      type: 'input',
      name: 'name',
      // 这里要加正则校验
      // validate: function (value) {
      //   if ((/^[a-z|-]+$/).test(value)) { return true }
      //   return '路由路径必须由小写字母或-组成'
      // },
      message: '请填入组件的名称'
    }
  ],
  actions: data => {
    const {name} = data
    const actions = [
      {
        type: 'add',
        path: `src/components/${name}/index.vue`,
        templateFile: './plop-templates/component/index.hbs',
        data: {
          name
        }
      }
    ]
    return actions
  }
}
