function isSubsequence(str1, str2) {
    let left = 0;
    let right = 0;

    while (left < str1.length && right < str2.length) {
        if (str1[left] === str2[right]) {
            left++;
            right++;
        } else {
            right++;
        }
        if (left === str1.length) {
            return true;
        }
    }
    return false;
}

module.exports = isSubsequence;

