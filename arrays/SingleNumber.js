function findSingleNumber(nums)
{
    let singleNumber = 0;
    for (let num in nums)
    {
        singleNumber = singleNumber ^ num;
    }
    return singleNumber;
}