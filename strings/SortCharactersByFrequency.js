function frequencySort(s)
{
    let map = {};
    for (let i = 0; i<s.length; i++)
    {
        if (!map[s[i]]) 
        {
            map[s[i]] = 1;
        } else {
            ++map[s[i]];
        }
    }

    let arrayMap = Object.entries(map);

    let sortedArrayMap = arrayMap.sort((a, b) => {
        if (b[1] === a[1]) 
        {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });

    return sortedArrayMap.map((item) => item[0]);
}