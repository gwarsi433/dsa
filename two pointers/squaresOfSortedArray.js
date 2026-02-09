/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l =0;
    let r = nums.length-1;
    let result =[];
    for(let i=nums.length-1;i>=0;i--){
        if(Math.abs(nums[l])>Math.abs(nums[r])){
            result[i]=nums[l]**2;
            l++
        }
        else{
            result[i]=nums[r]**2;
            r--
        }
    }
    return result
};


console.log(sortedSquares([-4,-1,0,3,10]))