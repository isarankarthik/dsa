function moveZerosToTheEnd(nums)
{
    let p1= 0;
    for(let i = 0; i<nums.length; i++)
    {
        let temp = 0;
        if(nums[i]!==0) {
            temp = nums[i];
            nums[i] = nums[p1];
            nums[p1] = temp;
            p1++;
        }
    }
    return nums;
}