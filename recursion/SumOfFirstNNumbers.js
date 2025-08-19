function findSumOfNNumbers(num)
{
    // base case -> returning 1 when num is 1 and from that we're finding the value.
    if (num == 1) return num;
    return num + findSumOfNNumbers(num-1);
}

let result = findSumOfNNumbers(10);
console.log(result);