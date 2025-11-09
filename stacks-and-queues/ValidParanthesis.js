/**
 * @param {string} s
 * @return {boolean}
 */

function isValidParanthesis(str)
{
    let validMap = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[","]"]
    ]);
    let stack = [];

    for (let i = 0; i<str.length; i++)
    {
        if (validMap.has(str[i])) {
            stack.push(str[i]);  
        } else {
            let top = stack.pop();

            if (!top || s[i] !== validMap.get(top)) return false;
        }
    }
    return stack.length === 0;
}