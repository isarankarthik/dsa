/**
 * @param {string} s
 * @return {boolean}
 */

function validPalindrome(s)
{
    let inputString = "";
    for (let ch of s) 
    {
        if ((ch>='a' && ch <='z') || (ch>='A' && ch <='Z') || (ch>='0' && ch <='9'))
        {
            inputString +=ch;
        }
    }

    let i = 0;
    let j = inputString.length-1;
    while (i<j)
    {
        if (inputString[i]!==inputString[j]) return false;
    }

    return true;
    
}