/**
 * @param {string} num
 * @return {string}
 */

function largestOddNumberInString(num)
{
    let n = num.length-1;

    while (n>=0)
    {
        if (num[n]%2 == 1) 
        {
            return num.substring(0, n+1);
        }
    }
    return "";
}