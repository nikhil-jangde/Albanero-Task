// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer formed by reversing the digits
//  of 'x' without using any built-in methods for reversal. After reversing the digits, determine whether the resulting number has any
//   prime factors. If it does have prime factors, retum 'Yes' along with the list of prime factors; otherwise, return 'No'.

function CheckPrimeFactor(x) {

    let IntToStr = x.toString();
    let reversedStr = '';
    let reversedNum;
    const PrimeFactor = [];
  
    if (x > 0) {
      for (let i = IntToStr.length - 1; i >= 0; i--) {
        reversedStr += IntToStr[i];
      }
  
      reversedNum = Number(reversedStr);
  
      if (reversedNum > 1) {
        for (let i = 2; i <= reversedNum; i++) {
          while (reversedNum % i === 0) {
            PrimeFactor.push(i);
            reversedNum /= i;
          }
        }
  
        if (PrimeFactor.length > 0) {
          return `Yes-${PrimeFactor}`;
        }
      }
    }
  
    return 'No';
  }
  
  let TestCase1 = 123;
  let TestCase2 = 1500;
  let TestCase3 = 1000;
  
  console.log(CheckPrimeFactor(TestCase1)); 
  console.log(CheckPrimeFactor(TestCase2)); 
  console.log(CheckPrimeFactor(TestCase3)); 
  