let nums = [4,2,9,1,8]

const divideArray = (nums) => {
    evenNums = [];
    oddNums = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i]%2 ===0) {
            evenNums.push(nums[i])
        } else {
            oddNums.push(nums[i])
        }
    }

    evenNums.sort();
    oddNums.sort();

    console.log('Even nums:');
    if (evenNums.length === 0) {
        console.log("None");
    } else {
        for (let evenNum = 0; evenNum<evenNums.length; evenNum++) {
            console.log(evenNums[evenNum]);
        }
    }
    console.log('Odd nums:');
    if (oddNums.length === 0) {
        console.log("None");
    } else {
        for (let oddNum = 0; oddNum<evenNums.length; oddNum++) {
        console.log(oddNums[oddNum]);
        }
    }
}

divideArray(nums);
nums = [4,2,8];
divideArray(nums);
