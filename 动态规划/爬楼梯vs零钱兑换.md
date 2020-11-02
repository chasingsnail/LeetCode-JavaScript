## 爬楼梯问题

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

## 零钱兑换 II

给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。

## 对比

这两个问题可以泛化为，给定一个整数数组 [1, 2] 以及一个 amount 为 3 的 总和，求解数组中数字累加成 amount 的组合数与排列数。

对于爬楼梯问题而言，求解的是排列数，即 1,2 与 2,1 是不同的排列走法。而对于零钱兑换而言，这两者是相同的，即只有 一个1和一个2 的组合情况。

## 爬楼梯解法

状态转移方程为 `dp[i] = dp[i - 1] + dp[i - 2]`，即拆解为求解到第 i 阶台阶的走法等于到第 i-1 阶与第 i-2 阶走法的总和。可看作是斐波那契数列求解。

```js

function climbStep(amount) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= amount; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[amount]
}

```

而当每次可走的步伐不止两种，例如有 [1,2,3] 种时，可将上述解法泛化处理。

```js
// amount = 5 steps = [1,2,3]
function climbStep(amount, steps) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= amount; i++) {
    for (let step of steps) {
      if (i < step) {
        continue
      }
      dp[i] += dp[i - step]
    }
  }
  return dp[amount]
}
```

上述解法可用于求解 零钱兑换I 问题。

## 零钱兑换II问题解法

该问题主要区别在于求解组合数而非排列数。可将上述爬楼梯问题内外循环调换，即以此求的每个 step 累加之下和为 amount 的情况。

首先求解 step 为 1 时，求解从 0 到 mount 的解法，在**此基础上**，求解 step 为 2 时的解法，即可以得到 x * step1 + y * step2 = amount 的解法组合。以此类推。

```js
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
```
