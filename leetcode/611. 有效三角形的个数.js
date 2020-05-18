/**
 * 三角形判定：任意两边之和大于第三边
 * 思路1：固定两条边，寻找符合条件的第三条边
 * 为了方便判定，先将数组排序，因为当a<=b<=c时，只需要判定a+b>c是否成立即可
 * 同时因为数组是有序的，所以当两条边确定，寻找第三条边时，可以用二分查找法，找到满足条件的最大边即可
 * 二分搜索：首先明确搜索的值的含义 明确符合要求的值不存在该如何处理
 */
var triangleNumber = function (nums) {
  var result = 0
  // 升序排序
  nums.sort(function (a, b) {
    return a - b
  })

  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      var k = search(nums, j + 1, nums.length - 1, nums[i] + nums[j])
      result += k - j - 1
    }
  }
  return result
};

// 二分搜索 查找索引k, 使得nums[l...k)中 < val [k...r] >= val
var search = function (nums, l, r, val) {
  while (l <= r) {
    var mid = ~~((l + r) / 2);
    if (nums[mid] >= val)
      r = mid - 1;
    else
      l = mid + 1;
  }
  return l
}