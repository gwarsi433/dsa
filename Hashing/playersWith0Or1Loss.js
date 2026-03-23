/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let playerMap = new Map()
    let playersWithZeroLosses =[]
    let playerWithOneLoss = []

    for(let match of matches){
        let winner = match[0]
        if(!playerMap.has(winner)){
            playerMap.set(winner,0)
        }
        let loser = match[1]
        if(!playerMap.has(loser)){
            playerMap.set(loser,1)
        }
        else{
            playerMap.set(loser,playerMap.get(loser)+1)
        }
    }
    playerMap.forEach((value,key)=>{
        if(value==0){
            playersWithZeroLosses.push(key)
        }
        else if(value==1){
            playerWithOneLoss.push(key)
        }
    })
    return [playersWithZeroLosses.sort((a,b)=>a-b),playerWithOneLoss.sort((a,b)=>a-b)]
};

console.log(findWinners([[2,3],[1,3],[5,4],[6,4]]))
console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))