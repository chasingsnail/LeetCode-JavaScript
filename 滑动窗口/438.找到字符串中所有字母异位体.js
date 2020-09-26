/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0
  let right = 0
  let freq = {}
  let count = 0
  let result = []

  for (const item of p) {
    freq[item] = freq[item] ? ++freq[item] : 1
  }

  const nLen = Object.keys(freq).length

  while (right < s.length) {
    const curR = s[right]
    right++
    
    if (--freq[curR] === 0) {
      count++
    }

    // 收窄
    while (count === nLen) {
      if (right - left === p.length) {
        result.push(left)
      }
      const curL = s[left]
      left++
      if (++freq[curL] > 0) {
        count--
      }
    }

  }

  return result
}

var findAnagrams = function (s, p) {
  let left = 0,
    right = 0,
    matchNum = 0

  let res = []

  let needs = new Array(128).fill(0)

  for (let c of p) {
    needs[c.charCodeAt()]++
  }

  while (right < s.length) {
    let rKey = s.charCodeAt(right++)
    if (needs[rKey]-- > 0) matchNum++
    while (matchNum === p.length) {
      if (right - left === p.length) {
        res.push(left)
      }
      let lKey = s.charCodeAt(left++)
      if (++needs[lKey] > 0) matchNum--
    }
  }
  return res
}
