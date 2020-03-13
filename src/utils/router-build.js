export default class RouterBuild {
  _moudle
  path
  isLayout=false
  constructor ({r, isLayout = true}) {
    this._moudle = createObject(r)
    this.path = r.keys()
  }
}
function createObject (r) {
  return function getModuleByPath (path) {
    return r(path).default
  }
}
