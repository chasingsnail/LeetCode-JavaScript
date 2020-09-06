var findLongestWord = function (s, d) {
	let result = ''
	for (let i = 0; i < d.length; i++) {
		const str = d[i]
		let j = 0
		for (let i = 0; i < s.length && j < str.length; i++) {
			if (s[i] === str[j]) {
				j++
			}
		}
		if (
			j === str.length &&
			((result.length === j && result > str) || result.length > j)
		) {
			result = str
		}
	}
	return result
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let p1 = m - 1
	let p2 = n - 1
	let p = m + n - 1
	while (p1 >= 0 && p2 >= 0) {
		nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
	}
	if (p2 >= 0) {
		const len = p2 + 1
		nums1.splice(0, len, ...nums2.slice(0, len))
	}
}
var searchMatrix = function (matrix, target) {
	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i]
		console.log(row, row[row.length - 1] >= target, row[row.length - 1], target)

		if (row[0] <= target && target <= row[row.length - 1]) {
			let start = 0
			let end = row.length - 1
			while (start <= end) {
				// console.log(row[start], row[end]);
				// if (row[start ])
				if (row[start] === target || row[end] === target) {
					return true
				}
				const middle = Math.floor((end - start) / 2)
				if (row[middle] > target) {
					end = middle
				} else {
					start = middle
				}
				// const flag = target - row[start] > row[end] - target
				// if (row[start] > target || !flag) {
				// 	start++
				// } else {
				// 	end--
				// }
			}
		}
	}
	return false
}

var a = [[-5]]

console.log(111, searchMatrix(a, -5))
