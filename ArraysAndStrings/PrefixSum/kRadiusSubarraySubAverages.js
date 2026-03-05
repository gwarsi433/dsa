/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * https://leetcode.com/problems/k-radius-subarray-averages
 */
var getAverages = function(nums, k) {


    if(k>nums.length) return new Array(nums.length).fill(-1)
    if(k==0) return nums

    let result=new Array(nums.length)
    let prefix = new Array(nums.length)
    prefix[0]=nums[0]
    for(let i=1;i<=nums.length-1;i++){
        prefix[i]=nums[i]+prefix[i-1]
    }

    for(let i=0;i<nums.length;i++){
        if(i<k) result[i]=-1
        if(i>=k){
            if(nums.length-1-i <k) result[i]=-1
            else{
                if(i==k){
                    result[i]=Math.trunc(prefix[i+k]/((k*2)+1))
                }
                else{
                    result[i]=Math.trunc((prefix[i+k]-prefix[i-k-1])/((k*2)+1))
                }
            }
        }
    }
    return result
};

console.log(getAverages([7,4,3,9,1,8,5,2,6],3))
console.log(getAverages([100000],0))
console.log(getAverages([8],1000))