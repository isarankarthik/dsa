/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s)
{
    s = s.trim();
    s = s.split(" ");
    return s[s.length-1].length;
}