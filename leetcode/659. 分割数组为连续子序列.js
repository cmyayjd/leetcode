
// 贪心算法
var isPossible = function (nums) {
  var numCnt = new Map()     // nums中的数字及出现的次数
  var numEndCnt = new Map()  // 以num结尾的连续子序列（长度不小于3）个数

  for (var i = 0; i < nums.length; i++) {
    if (numCnt.has(nums[i])) {
      numCnt.set(nums[i], numCnt.get(nums[i]) + 1)
    } else {
      numCnt.set(nums[i], 1)
    }

    if (!numEndCnt.has(nums[i])) {
      numEndCnt.set(nums[i], 0)
    }
  }

  for (var j = 0; j < nums.length; j++) {
    if (numCnt.get(nums[j]) == 0) {
      // nums[j]被使用完了
      continue
    } else if (numCnt.get(nums[j]) > 0 && numEndCnt.get(nums[j] - 1) > 0) {
      // 可以和已经的拼好的序列组成更长序列
      numCnt.set(nums[j], numCnt.get(nums[j]) - 1)
      numEndCnt.set(nums[j] - 1, numEndCnt.get(nums[j] - 1) - 1)
      numEndCnt.set(nums[j], numEndCnt.get(nums[j]) + 1)
    } else if (numCnt.get(nums[j]) > 0 && numCnt.get(nums[j] + 1) > 0 && numCnt.get(nums[j] + 2) > 0) {
      // 可以找到num[j] nums[j+1] nums[j+2] 的连续子序列
      // numCnt[j] numCnt[j+1] numCnt[j+2]各自减1
      // numEndCnt[j+2] 加1
      numCnt.set(nums[j], numCnt.get(nums[j]) - 1)
      numCnt.set(nums[j] + 1, numCnt.get(nums[j] + 1) - 1)
      numCnt.set(nums[j] + 2, numCnt.get(nums[j] + 2) - 1)
      numEndCnt.set(nums[j] + 2, numEndCnt.get(nums[j] + 2) + 1)
    } else {
      return false
    }
  }
  return true
};