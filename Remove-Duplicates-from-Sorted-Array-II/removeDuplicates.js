var removeDuplicates = function(nums) {
    
    for(var i=0;i<nums.length;i++){
        for(var j = i+1 ; j< nums.length;){
            if(nums[i] === nums[j])
                {
                   nums.splice(j,1) 
                    
                }
            else 
                j++;
        }
    }
    return nums.lenght;
};