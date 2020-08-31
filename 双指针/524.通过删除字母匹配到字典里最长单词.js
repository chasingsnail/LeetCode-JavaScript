/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  let result = ''
  d = d.sort()
  for (let i = 0; i < d.length; i++) {
    const str = d[i]
    console.log(str)
    let p1 = 0 // s
    let p2 = 0 // str
    while (p2 < str.length && p1 < s.length) {
      while (str[p2] !== s[p1] && p2 < str.length && p1 < s.length) {
        p1++
      }
      if (p2 < str.length && p1 < s.length) {
        p2++
        p1++
      }
      // console.log(str)
      if (p2 === str.length && p1 <= s.length && str.length > result.length) {
        result = str
      }
    }
  }
  return result
}

var s = 'abpcplea'
var d = ['a', 'b', 'c']
console.log(1111, findLongestWord(s, d))
