var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var partialSum = 0;
  
    for (let item of nums) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
      
  };

  console.log(maxSubArray([1,2,-3,5,9,-14,-5]));