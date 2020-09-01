/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  let startIndex = 0
  let endIndex = height.length - 1
  while(startIndex < endIndex) {
    const curArea = (endIndex - startIndex) * Math.min(height[startIndex], height[endIndex])
    max = Math.max(max, curArea)
    if (height[startIndex] < height[endIndex]) {
      startIndex++
    } else {
      endIndex--
    }
  }
  return max
};

var arr = [1,8,6,2,5,4,8,3,7]

console.log(111, maxArea(arr));