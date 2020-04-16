export default {
  path: '/system/config/',
  name: 'SystemConfig',
  component: resolve => require(['@/views/system/config'], resolve),
  hidden: true,
  meta: {
    id: 'pageerror:havenopermission:404',
    title: '404'
  },
  isDir: false
}
