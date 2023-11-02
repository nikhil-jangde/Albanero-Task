// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string

function ArrangeBiggest(nums) {
    let  newNum= nums.sort((a,b)=>`${b}${a}` - `${a}${b}`).join('');
  
   return newNum
  }
  
  let nums1 = [10,2]
  let nums2 = [3,30,34,5,9]
  console.log(ArrangeBiggest(nums1));
  console.log(ArrangeBiggest(nums2));