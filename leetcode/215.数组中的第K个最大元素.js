
var findKthLargest = function(nums, k) {
  // nums = Array.from(new Set(nums))

  nums.sort(function(a, b) {
      return b - a
  })

  return nums[k-1]
};

/**
 * TODO
 * 使用堆求解
 * 快速查找求解
 */

