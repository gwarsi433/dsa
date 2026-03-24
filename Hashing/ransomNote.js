/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteMap = new Map()

    for(let i of ransomNote){
        ransomNoteMap.set(i,(ransomNoteMap.get(i)||0)+1)
    }
    for(let i of magazine){
        if(ransomNoteMap.has(i)){
            ransomNoteMap.set(i,(ransomNoteMap.get(i)||0)-1)
        }
    }
   

    for(let [i,v] of ransomNoteMap){
        if(v>0) return false
    }
    return true
    
};

console.log(canConstruct("bg",
"efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))