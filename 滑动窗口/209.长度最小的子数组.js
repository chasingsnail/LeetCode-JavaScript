var minSubArrayLen = (n, s) => {
  let result = Infinity

  let left = 0
  let right = 0
  let count = 0

  while (right < n.length) {
    const curR = n[right]
    right++

    count += curR

    while (count >= s) {
      if (right - left < result) {
        result = right - left
      }
      const curL = n[left];
      left++
      count -= curL
    }
  }

  return result === Infinity ? 0 : result
}