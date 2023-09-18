// add whatever parameters you deem necessary


function frequencyCounter(arr) {
    const frequencies = new Map();

    for(item of arr) {
        let count = frequencies.get(item) || 0;
        frequencies.set(item, count + 1);
    }
    return frequencies;
}


function sameFrequency(int1, int2) {
    const arr1 = String(int1).split("");
    const arr2 = String(int2).split("");
    if(arr1.length !== arr2.length) {
        return false;
    }
    
    const map1 = frequencyCounter(arr1);
    const map2 = frequencyCounter(arr2);

    for(let key of map1.keys()) {

        if(map2.has(key) === false) {
            return false;
        }

        if(map2.get(key) !== map1.get(key)) {
            return false;
        }
    }
    return true;
}

module.exports = sameFrequency;