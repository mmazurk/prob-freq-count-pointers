// add whatever parameters you deem necessary
// only lowercase
// no space or special characters
// that means string can be empty
// (messageString, lettersString) => true || false

// ("hello", "hellohello") ==> true
// ("hello", "helooo") ==> false
// ("aaa", "aa") ==> false
// ("", "a") ==> false

// Map.size()
// Map.keys()
// Map.has()
// Map.get()

function createFrequencyCounter(array) {
  let frequencies = new Map();
  for (let val of array) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }
  return frequencies;
}

function constructNote(messageStr, lettersStr) {
    if (messageStr.length === 0) return true;
    if (lettersStr.length === 0) return false;

  const msgFrequencies = createFrequencyCounter(messageStr);
  const letterFrequencies = createFrequencyCounter(lettersStr);

  for (let letter of msgFrequencies.keys()) {
    // check that it's a key in letterFrequencies
    // check that the value of the key in letterFrequencies is greater or equal
    if (
      !letterFrequencies.has(letter) ||
      letterFrequencies.get(letter) < msgFrequencies.get(letter)
    )
      return false;
  }
  return true;
}

module.exports = constructNote;   