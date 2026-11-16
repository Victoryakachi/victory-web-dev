// input should be [1,2,3,4] and output will be [24,12,8,6]

function productExceptSelf(nums) {
    let totalProduct = 1;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        totalProduct *= nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        result.push(totalProduct / nums[i]);
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));