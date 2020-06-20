var searchInsert = function(nums, target) {
    for(var i = 0; i<nums.length;i++){
        if(nums[i]===target)
            return nums.indexOf(target);
        else if(nums[i]>target)
                return i;
    }
    return nums.length;    
};

console.log('index: ' + searchInsert([1,3,4,8,9],5));