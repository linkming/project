export default class IndexdDB {
  // var option={
  //     el:null
  // }
  constructor(DBname, option, version = 1) {
    this.option = option
    this.version = version
    this.DBname = DBname
    this.request = function() {
      indexedDB.open(this.DBname, this.version)
    }
  }
}
