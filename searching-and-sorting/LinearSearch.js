function linearSearch(arr, nums)
{
    for (let i = 0; i<arr.length;i++) 
    {
        if (arr[i] == nums) return i;
    }
    return -1;
}