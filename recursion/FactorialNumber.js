function findFactorial(num)
{
    if (num == 0) return 1;
    return num * findFactorial(num-1);
}