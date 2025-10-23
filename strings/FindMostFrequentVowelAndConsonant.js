/**
 * @param {string} s
 * @return {number}
 */

function maxFreqSum(s)
{
    let maxVowel = 0;
    let maxConsonant = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelMap = new Map();

    let consonantMap = new Map();

    for (let i = 0; i< s.length; i++) 
    {
        if (vowels.includes(s[i])) 
        {
            vowelMap.set(s[i], (vowelMap.get(s[i]) || 0) +1);
        } else {
            consonantMap.set(s[i], (consonantMap.get(s[i]) || 0) +1);
        }
    }

    maxVowel = vowelMap.size > 0 ? Math.max(...vowelMap.values()) : 0;
    maxConsonant = consonantMap.size > 0 ? Math.max(...consonantMap.values()) : 0;
    return maxVowel + maxConsonant;
}