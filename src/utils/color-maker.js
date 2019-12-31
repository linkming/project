// 10种默认色值
const colorBoard = ['#EC8F6A', '#C4BAAC', '#98BCDC', '#DDB6C6', '#60A9A6', '#9DA9F0', '#E9D68D', '#99B19C', '#94AEBE', '#DF7599']

/**
 * @description 色值转换方法，支持RGB、RBGA、HEX
 * @param {Number} p （必填）darken或lighten的百分比值 范围 -1（darken 100%）至 1（lighten 100%） 例如加亮32% => 0.32
 * @param {String} c0 （必填）基础色值
 * @param {String} c1 融合色值（选填）(配置为"c"转换色值结果) 例如#F3A9 + [Convert] => rgba(255,51,170,0.6)
 * @param {Boolean} Defaults to false.（选填） And will use Log Blending. Pass in true to use Linear Blending.
 * @returns RGB或HEX色值
 */
const pSBConvert = (p, c0, c1, l) => {
  let r; let g; let b; let P; let f; let t; let h; const i = parseInt; const m = Math.round; let a = typeof (c1) === 'string'
  if (typeof (p) !== 'number' || p < -1 || p > 1 || typeof (c0) !== 'string' || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a)) return null
  const pSBCr = (d) => {
    let n = d.length; const x = {}
    if (n > 9) {
      [r, g, b, a] = d = d.split(','), n = d.length
      if (n < 3 || n > 4) return null
      x.r = i(r[3] == 'a' ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1
    } else {
      if (n == 8 || n == 6 || n < 4) return null
      if (n < 6) d = '#' + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : '')
      d = i(d.slice(1), 16)
      if (n == 9 || n == 5) x.r = d >> 24 & 255, x.g = d >> 16 & 255, x.b = d >> 8 & 255, x.a = m((d & 255) / 0.255) / 1000
      else x.r = d >> 16, x.g = d >> 8 & 255, x.b = d & 255, x.a = -1
    } return x
  }
  h = c0.length > 9, h = a ? c1.length > 9 ? true : c1 == 'c' ? !h : false : h, f = pSBCr(c0), P = p < 0, t = c1 && c1 != 'c' ? pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }, p = P ? p * -1 : p, P = 1 - p
  if (!f || !t) return null
  if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b)
  else r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5), g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5), b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5)
  a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0
  if (h) return 'rgb' + (f ? 'a(' : '(') + r + ',' + g + ',' + b + (f ? ',' + m(a * 1000) / 1000 : '') + ')'
  else return '#' + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
}

/**
 * @description 色值转换方法，支持RGB、RBGA、HEX
 * @param {Number} p （必填）darken或lighten的百分比值 范围 -1（darken 100%）至 1（lighten 100%） 例如加亮32% => 0.32
 * @param {String} c0 （必填）基础色值
 * @param {Number} time 相比原来 darken 或 lighten 几次
 * @returns RGB或HEX色值
 */

const recurMatchColor = (p, c0, time) => {
  let tempColor = c0

  for (let i = 0; i < time; i++) {
    tempColor = pSBConvert(p, tempColor)
  }
  return tempColor
}

export {
  colorBoard,
  pSBConvert,
  recurMatchColor
}
