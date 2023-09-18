// add whatever parameters you deem necessary


function twoArrayObject(arr1, arr2) {
    const newObject = {};
    for(let i = 0; i < arr1.length; i++) {
        newObject[arr1[i]] = arr2[i] ? arr2[i] : null;
    }
    return newObject;
}

module.exports = twoArrayObject;   