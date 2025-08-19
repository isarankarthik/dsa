function findPowerOfThree(num)
{
    if (num == 1) return true;
    else if (num < 1 || num % 2 == 0) return false;
    return findPowerOfThree(num/3);
}