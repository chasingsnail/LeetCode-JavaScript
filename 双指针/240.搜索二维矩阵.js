/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col > 0) {
    if (target === matrix[row][col]) {
      return true
    } else if (target < matrix[row][col]) {
      col--
    } else {
      row++
    }
  }
	return false
}