function checkSortArray(nums)
{
    if (nums.length <= 1) return true;
    return this.checkSort(nums, 0, 1);
}

function checkSort(nums, left, right)
{
    if (right>=nums.length) return true;
    else if (nums[left] > nums[right]) return false;
    return checkSort(nums, left+1, right+1);
}