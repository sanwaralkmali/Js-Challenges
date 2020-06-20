var lengthOfLastWord = function(s) {

   
    const result = s.split(' ').filter(word => word !== "");
    if (result.length <= 0)
        return 0;
        
    return result[result.length-1].length;
    
};

console.log(lengthOfLastWord("  "));