/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let result = ''

  let freq = {}
  for (const item of t) {
    freq[item] = freq[item] ? ++freq[item] : 1
  }

  const nLen = Object.keys(freq).length

  // let store = {}
  let count = 0

  let left = 0
  let right = 0

  while (right < s.length) {
    const curR = s[right]
    right++
    if (--freq[curR] === 0) {
      count++
    }

    while (count === nLen) {
      const curL = s[left]
      if ((result.length && right - left < result.length) || !result) {
        result = s.slice(left, right)
      }
      left++
      if (++freq[curL] > 0) {
        count--
      }
    }
  }

  return result
}
