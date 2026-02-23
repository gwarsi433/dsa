/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.com/problems/container-with-most-water
 */
var maxArea = function(height) {
    let right = height.length-1;
    let left =0;
    let volume=0;
    if(height.length==1){
        return Math.min(height[left],height[right])
    }
    while(left<right){
        if(height[left]<=height[right]){
            volume = (right-left) * height[left]>volume? (right-left) * height[left]:volume
            left++;
        }
        else{
            volume =(right-left)*height[right]>volume?(right-left)*height[right]:volume
            right--;
        }
    }
    return volume
    
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))