// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method

function KthLargest(nums, K) {
    if (K <= 0 && K > nums.length) {
      return null;
    }
  
    let max;
    let maxIndex;
  
    for (let i = 0; i < K; i++) {
      max = nums[0];
      maxIndex = 0;
  
      for (let j = 1; j < nums.length; j++) {
        if (nums[j] > max) {
          max = nums[j];
          maxIndex = j;
        }
      }
  
      nums.splice(maxIndex, 1);
    }
  
    return max;
  }

  let nums = [10, 4, 12, 9, 87, 34];
  let K = 2 ; 
  console.log(KthLargest(nums, K));
  