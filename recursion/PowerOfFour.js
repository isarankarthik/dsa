function findPowerOfFour(num)
{
    if (num == 1) return true;
    else if (num < 1 || num %2 != 0) return false;
    return findPowerOfFour(num/4);
}