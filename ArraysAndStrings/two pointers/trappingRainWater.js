/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.com/problems/trapping-rain-water
 */
var trap = function (height) {
    var left = 0;
    var right = height.length - 1;
    var lmax = 0;
    var rmax = 0;
    var amount = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= lmax) {
                lmax = height[left]
            }
            else {
                amount = amount + (lmax - height[left])
            }

            left++;
        }
        else{
            if (height[right] >= rmax) {
                rmax = height[right]
            }
            else {
                amount = amount + (rmax - height[right])
            }
            right --
        }
    }

    return amount
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))
console.log(trap([[5,4,1,2]]))
console.log(trap([6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3]))