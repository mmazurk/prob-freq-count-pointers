
// this is a neat trick using a hash table
// this would be O(1)

function countPairs(arr, target) {
    const lookupTable = new Map();
    let numPairs = 0;

    for(num of arr) {
        let complement = target - num; 
        if(lookupTable.has(complement)) {
            numPairs += lookupTable.get(complement)
        }
        lookupTable.set(num, (lookupTable.get(num) || 0) + 1)
    }
    return numPairs;
}

module.exports = countPairs;

