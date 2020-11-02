// I
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
// 你可以认为每种硬币的数量是无限的。
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeByRecursion = function (coins, amount) {
  // 递归 （通过加入缓存机制优化）
  let memo = new Array(amount)

  function helper(rest) {
    if (rest < 0) {
      return -1
    }
    if (rest === 0) {
      return 0
    }

    if (memo[rest - 1] !== 0) {
      return memo[rest - 1]
    }

    let min = Infinity
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      let res = helper(rest - coin)
      // 0 必然是最小且满足条件的的 res
      if (res >= 0 && res < min) {
        min = res + 1
      }
    }
    memo[rest - 1] = min
    return memo[rest - 1]
  }
  helper(amount)
  return memo[amount - 1]

  // BFS
  // let queue = [amount]
  // let level = 0
  // while (queue.length) {
  //   // let curNode = queue.pop()
  //   let nodes = []
  //   for (let i = 0; i < queue.length; i++) {
  //     const curNode = queue[i]
  //     if (curNode === 0) return level
  //     coins.forEach((item) => {
  //       const next = curNode - item
  //       if (next >= 0) {
  //         nodes.push(next)
  //       }
  //     })
  //   }
  //   queue = nodes
  //   level++
  // }
  // return -1
}

/**
 * 零钱兑换 DP 解法
 * @param {number[]} coins 硬币
 * @param {number} amount 总和
 */
var coinChangeByDp = function (coins, amount) {
  // dp[i] = Min(dp[n - k], k in coins) + 1
  const max = amount + 1
  let dp = new Array(max).fill(max)
  dp[0] = 0
  for (let i = 1; i < max; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0) {
        continue
      }
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }
  // console.log(dp)
  return dp[amount] === max ? -1 : dp[amount]
}

// II
// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 泛化为求给定 amount 与 coins，求解 coins 组合成 amount 的个数
function coinChange(amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }

  return dp[amount]
}
