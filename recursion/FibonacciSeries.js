function generateFibonacci(num)
{
    if (num <= 1) return num;
    return generateFibonacci(num-1) + generateFibonacci(num-2);
}