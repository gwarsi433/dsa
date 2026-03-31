/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let desinationCity = new Set()
    let sourceCities = new Set()

    for (let [source,dest] of paths){
        if(!sourceCities.has(dest)){
            desinationCity.add(dest)
        }
        else{
            desinationCity.delete(dest)
        }

        if(!desinationCity.has(source)){
            sourceCities.add(source)
        }
        else{
            desinationCity.delete(source)
        }

       
    }   
    return [...desinationCity][0]

};


console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
console.log(destCity([["B","C"],["D","B"],["C","A"]]))
console.log(destCity([["A","Z"]]))
