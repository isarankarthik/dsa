function maxConsecutiveOnes(nums)
{
    let maxConsecutiveOneCount = 0;
    let consecutiveOneCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            consecutiveOneCount++;
            if (consecutiveOneCount > maxConsecutiveOneCount) {
                maxConsecutiveOneCount = consecutiveOneCount;
            }
        } else {
            consecutiveOneCount = 0;
        }
    }
    return maxConsecutiveOneCount;
}