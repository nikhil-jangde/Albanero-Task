// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

function Anagram(arr) {
    
    const anagramChecker = new Map();
  
    for (const string of arr) {

      const sortedstring = string.split('').sort().join('');

      if (anagramChecker[sortedstring]) {
        anagramChecker[sortedstring].push(string);
      } 
      else {
        anagramChecker[sortedstring] = [string];
      }

    }
  
    return Object.values(anagramChecker);
  }
  

  const TestCase1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const TestCase2 = [""];
  const TestCase3 = ["a"];
  
  console.log(Anagram(TestCase1)); 
  console.log(Anagram(TestCase2));
  console.log(Anagram(TestCase3));