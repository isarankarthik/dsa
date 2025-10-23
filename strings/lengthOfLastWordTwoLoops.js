/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s)
{
    let lastWordLength = 0
    let i = s.length -1;

    while (i>=0 && s[i] == ' ') i--;

    while (i>=0 && s[i]!== '') {
        lastWordLength++;
        i--;
    }
    return lastWordLength;
}