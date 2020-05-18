/**
 * 遍历nums1中每一个元素，判断nums2中是否有该元素;
 * 如果有，将该元素push到结果数组中，并从nums2中删除该元素.
 *  Array.prototype.indexOf() 返回元素在数组中的第一个索引，如果不存在，则返回-1.
 *  Array.prototype.splice()  给数组删除、替换、添加元素，以数组的形式返回修改的内容，原数组会改变
 */
var intersect = function(nums1, nums2) {
  var result = []
  for(var i = 0; i < nums1.length; i++){
      var j = nums2.indexOf(nums1[i])
      if(j > -1){
          result.push(nums2.splice(j,1)[0])
      }
  }
  return result
};


/**
 * TODO
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 */
