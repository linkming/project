/*
 * @Author: 孙旭明
 * @Date: 2019-07-13 18:00:09
 * @Last Modified by: 孙旭明
 * @Last Modified time: 2019-07-13 20:40:25
 */

/**
 * 清空对象键值
 * @param {Object} object
 */
export function clearObject(object) {
  console.log(object)
  for (const key in object) {
    console.log(key)
    if (!object[key].constructor === Object) {
    //   object[key] = ''
      console.log(object[key])
    //   return
    }
    //  else {
    //   console.log(key)
    //   // if (key) {
    //   //   clearObject(object[key])
    //   // }
    // }
  }
}
