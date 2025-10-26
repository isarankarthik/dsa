/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isoMorphicString(s, t)
{
    let sMappingMap = new Map();
    let tMappingMap = new Map();

    for (let i = 0; i<s.length; i++)
    {
        if (!sMappingMap.has(s[i]) && !tMappingMap.has(t[i])) 
        {
            sMappingMap.set(s[i], t[i]);
            tMappingMap.set(t[i], s[i]);
        } else if (sMappingMap.get(s[i]) !== t[i] || tMappingMap.get(t[i]) !== s[i]) return false;
    }
    return true;
}