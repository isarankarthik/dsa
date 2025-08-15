function findMissingNumber(nums)
{
    let actualSum = Math.floor(((nums.length) * (nums.length+1))/2);
    let expectedSum = 0;
    for (let i = 0; i<nums.length; i++) {
        expectedSum += nums[i]; 
    }
    return actualSum - expectedSum;
}