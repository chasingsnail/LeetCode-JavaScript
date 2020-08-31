/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let startIndex = 0
  let endIndex = numbers.length - 1
  let sum
  while (startIndex < endIndex) {
    sum = numbers[startIndex] + numbers[endIndex]
    if (sum > target) {
      endIndex--
    } else if (sum < target) {
      startIndex++
    } else {
      return [startIndex + 1, endIndex + 1]
    }
  }
}

const res = twoSum([1, 2, 3, 4], 5)
console.log(res);
