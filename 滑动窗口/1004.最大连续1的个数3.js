/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let result = 0
  let left = 0
  // let right = 0
  for (; left < A.length; left++) {
    let count = 0
    let right = left
    while (right + 1 < A.length && count <= K) {
      if (A[right + 1] === 0) {
        count++
      }
      right++
    }
    result = Math.max(result, right - left + 1)
  }
  return result
};