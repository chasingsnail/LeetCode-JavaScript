/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1_copy = nums1.slice(0, m)
  let p1 = 0 // nums1_copy
  let p2 = 0 // nums2
  let p = 0
  while (p1 < m && p2 < n) {
    nums1[p++] = nums1_copy[p1] < nums2[p2] ? nums1_copy[p1++] : nums2[p2++]
  }
  let left
  if (p1 < m) {
    left = nums1_copy.slice(p1)
  }
  if (p2 < n) {
    left = nums2.slice(p2)
  }
  nums1.splice(p, left.length, ...left)
}

// 优化版，从尾部开始
var mergeUpdate = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = m + n - 1
  while(p1 >= 0 && p2 >= 0) {
    nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
  }
  // 补齐 nums2 剩余元素
  if (p2 >= 0) {
    nums1.splice(0, p2 + 1, ...nums2.slice(0, p2 + 1))
  }
}

var nums1 = [1, 2, 3, 9, 0, 0, 0, 0, 0, 0]
mergeUpdate(nums1, 4, [2, 5, 6], 3)
console.log(nums1);