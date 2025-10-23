/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s)
{
    let i = s.length -1;
    let lastWordLength = 0;

    while (i>=0) 
    {
        if (s[i]!== ' ') {
            lastWordLength++;
        } else if (lastWordLength > 0) {
            break;
        }
        i--;
    }
    return lastWordLength;
}