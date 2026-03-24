/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * https://leetcode.com/problems/jewels-and-stones/
 */
var numJewelsInStones = function(jewels, stones) {
    let stonesThatAreJewels =0;
    let jewelsMap = new Map()

    for(let i of jewels){
        jewelsMap.set(i,(jewelsMap.get(i)||0)+1)
    }

    for(let i of stones){
        if(jewelsMap.has(i)){
            stonesThatAreJewels++
        }
    }
    return stonesThatAreJewels
};


console.log(numJewelsInStones('aA','aAAbbbb'))
console.log(numJewelsInStones('z','ZZ'))