// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.

function isSegment(s, wordArray) {

    const canSegment = (start) => {
      if (start === s.length) {
        return true; 
      }
  
      for (let end = start + 1; end <= s.length; end++) {
        const word = s.substring(start, end);
        if (wordArray.includes(word) && canSegment(end)) {
          return true;
        }
      }
  
      return false; 
    };
  
    return canSegment(0); 
  }
  let s1 = "leetcode";
  let wordArray1 =  ["leet", "code"];

  let s2 = "applepenapple";
  let wordArray2 =  ["apple", "pen"];

  let s3 = "catsandog";
  let wordArray3 =["cats", "dog", "sand", "and", "cat"];


  console.log(isSegment(s1,wordArray1)); 
  console.log(isSegment(s2,wordArray2));
  console.log(isSegment(s3,wordArray3));