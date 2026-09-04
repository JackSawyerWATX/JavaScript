var reduce = function (nums, fn, init) {
  var res = init;
  for (var i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};

console.log(reduce([1, 2, 3, 4], function (sum, number) {
  return sum + number;
}, 0));