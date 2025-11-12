/**
 * @param {string} s
 * @return {string}
 */

function removeOuterMostParanthesisUsingStack(s)
{
    let stack = [];
    let ans = 0;
    for (let i = 0; i<s.length; i++)
    {
        if (s[i] == '(') 
        {
            if (stack.length !== 0)
            {
                ans += '(';
            }
            stack.push(s[i]);
        } else {
            stack.pop();
            if (stack.length !== 0)
            {
                ans += ')';
            }
        }
    }
    return ans;
}