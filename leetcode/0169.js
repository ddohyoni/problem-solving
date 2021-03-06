/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  var mid = Math.floor(nums.length / 2);

  return nums[mid];
};
