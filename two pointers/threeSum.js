/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.com/problems/3sum
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let result = []

    for (let i = 0; i < nums.length - 2; i++) {
        //duplicate i
        let j = i + 1;
        let k = nums.length - 1
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        if (nums[i] > 0) {
            break
        }
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] == 0) {
                result.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] == nums[j + 1]) j++
                while (j < k && nums[k] == nums[k - 1]) k--
                j++;
                k--;
            }
            else if (nums[i] + nums[j] + nums[k] < 0) {
                j++
            }
            else {
                k--
            }
        }
    }
    return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))