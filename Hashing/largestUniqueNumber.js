/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    var numberFrequency = new Map();
    let largestKey = -1

    for(let i of nums){
        numberFrequency.set(i,(numberFrequency.get(i) + 1|| 1))
    }
    numberFrequency.forEach((value,key)=>{
        if(key>largestKey && value ==1){
            largestKey=key
        }
    })
    return largestKey
};


console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]))
console.log(largestUniqueNumber([9,9,8,8]))