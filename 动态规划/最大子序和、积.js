// 最大子序和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = nums
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 1], 0)
  }
  return Math.max(...dp)
}

// 最大子序积
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = -Infinity
  let curMax = 1
  let curMin = 1

  for (let i = 0; i < nums.length; i++) {
    // 小于 0 时，最大最小值交换
    if (nums[i] < 0) {
      ;[curMax, curMin] = [curMin, curMax]
    }
    curMax = Math.max(nums[i] * curMax, nums[i])
    curMin = Math.min(nums[i] * curMin, nums[i])

    max = Math.max(max, curMax)
  }
  return max
}
