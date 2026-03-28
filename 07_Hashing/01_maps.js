var singleNumber = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) - 1);
    }
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [key, val] of map) {
    if (val === 1) return key;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
