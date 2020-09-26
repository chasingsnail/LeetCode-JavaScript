/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let result = false

  let freq = {}
  for (const item of s1) {
    freq[item] = freq[item] ? ++freq[item] : 1
  }

  const nLen = Object.keys(freq).length

  let left = 0
  let right = 0
  let matchCount = 0
  while (right < s2.length) {
    const curR = s2[right]
    right++
    if (--freq[curR] === 0) {
      matchCount++
    }
    while (matchCount === nLen) {
      if (right - left === s1.length) {
        return true
      }
      const curL = s2[left]
      left++
      if (++freq[curL] > 0) {
        matchCount--
      }
    }
  }

  return result
}
