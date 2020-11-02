
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  // t1[i] === t2[j] : dp[i] = dp[i - 1][j - 1] + 1
  // t1[i] !== t2[j] : dp[i] = Math.max(dp[i - 1][j], dp[i][j - 1])
  const t1 = text1.length
  const t2 = text2.length
  const dp = new Array(t1 + 1).fill(0).map(i => new Array(t2 + 1).fill(0))

  for (let i = 1; i < t1; i++) {
    for (let j = 1; j < t2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[t1][t2]
};