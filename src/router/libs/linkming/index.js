export default {
  path: '/linkming',
  name: 'Linkming',
  component: resolve => require(['@/view/linkming'], resolve),
  hidden: true,
  meta: {
    id: 'pageerror:havenopermission:404',
    title: '404'
  },
  isDir: false
}
