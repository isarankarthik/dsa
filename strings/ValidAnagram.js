/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function validAnagram(s,t)
{
    if (s.length !== t.length) return false;
    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i<s.length; i++)
    {
        sMap.set(s[i], (sMap.get(s[i]) || 0) +1);
        tMap.set(t[i], (tMap.get(t[i]) || 0) +1);
    }

    for (const [key, value] of sMap) {
        if (!tMap.has(key) || tMap.get(key) !== value) return false;
    }

    return true;
    
}

function optimisedValidAnagram(s, t)
{
    if (s.length !== t.length) return false;

    let sMap = new Map();

    for (let ch of s)
    {
        sMap.set(ch, (sMap.get(ch) || 0) +1);
    }

    for (let ci of t) 
    {
        if (!sMap.has(ci) || sMap.get(ci) === 0) return false;
        sMap.set(ci, sMap.get(ci)-1);
    }
    return true;
}