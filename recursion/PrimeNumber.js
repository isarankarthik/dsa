function findPrime(num)
{
    if (num <=1) return false;

    return prime(num, 2);
}

function prime(num, x)
{
    if (x > Math.sqrt(num)) return true;

    else if (num % x == 0) return false;
    
    return prime(num, x+1);
}