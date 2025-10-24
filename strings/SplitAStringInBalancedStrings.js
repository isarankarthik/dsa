/**
 * @param {string} s
 * @return {number}
 */

function splitBalancedStringCount(s)
{
    let rCount = 0;
    let lCount = 0;
    let balancedStringCount = 0;
    for (let i = 0; i< s.length; i++)
    {
        if (s[i] == 'R') rCount++;
        else if (s[i] == 'L') lCount++;

        if (lCount == rCount) 
        {
            balancedStringCount++;
            lCount = 0;
            rCount = 0;
        }
    }
    return balancedStringCount;
}