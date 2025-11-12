/**
 * @param {string} s
 * @return {string}
 */

function removeOuterMostParanthesisWithoutStack(s)
{
    let value = 0;
    let ans = "";

    for (let i = 0; i<s.length; i++)
    {
        if (s[i] == '(')
        {
            if (level !== 0) 
            {
                ans += '(';
            }
            level++;
        } else {
            level--;
            if (level !== 0) 
            {
                ans += ')';
            }
        }
    }
    return ans;
}