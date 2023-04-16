/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const sorted_arr   = nums.sort((a,b) => a - b );
    const unique_sorted_arr  = [...new Set(sorted_arr)];
    return unique_sorted_arr[unique_sorted_arr.length - 2];
}