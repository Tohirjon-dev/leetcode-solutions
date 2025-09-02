// Two sum

const twoSum = function (nums, target) {
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (count[diff] !== undefined) {
      return [i, count[diff]];
    }
    count[nums[i]] = i;
  }
  return [];
};
