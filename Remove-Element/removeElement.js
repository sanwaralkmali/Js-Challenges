var removeElement = function(nums, val) {
    for(var i = 0; i <nums.length;){
        if(nums[i]===val){
            nums.splice(i,1) 
        }
        else 
           i++;
    }
    return nums;
};

var nums = removeElement([1,2,3,3,2,5,6],2)
console.log('length: ' + nums.length);
console.log('new list : ' + nums);
