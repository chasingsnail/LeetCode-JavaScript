
// 50
function pwo(x, n) {
  if (n < 0) {
    return 1 / pwo(x, -n)
  } else if (n === 0) {
    return 1
  } else {
    let result = 1
    const subResult = pwo(x, Math.floor(n / 2))
    if (n % 2 === 1) {
      // odd
      result *= subResult * subResult * x
    } else {
      result *= subResult * subResult
    }
    return result
  }
}

// 78
function subsets(nums) {
   let result = []
   _dilldown(0, nums, [], result)
   return result
}

function _dilldown(level, nums, s, res) {
  if (level === nums.length) {
    res.push(s)
  }

  _dilldown(level + 1, nums, s.concat(nums[level]), res)
  _dilldown(level + 1, nums, s, res)

}