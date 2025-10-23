/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

function jewelsAndStones(jewel, stones)
{
    let jewelSet = new Set(jewel);
    let jewelCount = 0;
    for (let i = 0; i<stones.length; i++) 
    {
        if(jewelSet.has(stones[i])) {
            jewelCount++;
        }
    }
    return jewelCount;
}