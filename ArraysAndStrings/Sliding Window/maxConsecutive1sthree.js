/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/max-consecutive-ones-iii
 */
var longestOnes = function(nums, k) {
    let l=ans=curr=0;

    for(let i =0;i<nums.length;i++){
        if(nums[i]==0){
            curr+=1;
        }
        while(curr>k){
            if(nums[l]==0){
                curr-=1;
            }
            l++;
        }
        ans=Math.max(ans,i-l+1)
    }
    return ans
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))
console.log(longestOnes([0,0,0,1],4))