// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


var productExceptSelf = function(nums)  {
    /// first we count how many zeros in array 
    var zeros = [];
    for(var i = 0; i < nums.length; i ++){
        if(nums[i] === 0) {
            zeros.push(nums[i]);
        }
    }
    
    //if no zeros, we want to get the product of the array, and 
	//then iterate throgh array and divide product 
	//by every element of the array, and then push it all into a new array 
    
  
    if(zeros.length === 0){
        var total=1
        for (var i = 0; i < nums.length; ++i){
            total *= nums[i]
        }
        var ar = []
        for(let j = 0;j<nums.length;j++){
            ar.push(total / nums[j])
        }
        return ar
        
        
        
    
        
      // if there is 1 zero, we want to return the product array of all elements,
	//  return it at the index of zero, and replace the rest of the array 
	//  with zero, note that they want you to return the product of the array in this case in the same index as 0 
    //
        
    } else if (zeros.length === 1){
        
        var zd = nums.filter(val => val !== 0);
        var total=1;
        var ar = []

        for (var i = 0; i < zd.length; ++i) {
            total *= zd[i];
        }
        var jzx = new Array(nums.length - 1).fill(0)
        jzx.splice(nums.indexOf(0),0,  total)
        return jzx
        // if there is more than 1 zero we just want to return a 
		//new array of zeros in the same length as nums 

    } else {
        return new Array(nums.length).fill(0);
    }
    
}