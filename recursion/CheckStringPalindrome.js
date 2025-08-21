function checkPalindrome(s)
{
    return this.isPalindrome(s, 0, s.length-1);
}

function isPalindrome(s, left, right)
{
    if (left >= right) return true;
    else if (s[left] !== s[right]) return false;
    return isPalindrome(s, left+1, right-1);
}