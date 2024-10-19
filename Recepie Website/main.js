// let sum=0;
// for(let i=0;i<1000000000000;i++){
//     sum=sum+i;
// }
// console.log(sum);
//  
// let counter=0;
// setInterval()=>{
//     for(let i=0;i>30;i++){
//   counter++;
//     }
// }
//     console.log(counter);

// function findIndexOf(str, target) {
//   console.log("original string:", str);
//   console.log("Index:", str.indexOf(target));
// }
// findIndexOf("hello world","sgtarew");
// const initialArray= [1,2,3,4,5,6, "sana"];
// function logThing(str){
//   console.log(str);

// }
// initialArray.forEach(logThing)


function isAnagram(str1, str2) {
  const lowerWord1 = str1.toLowerCase();
  const lowerWord2 = str2.toLowerCase();
  if (lowerWord1.length !== lowerWord2.length) {
    return false;
  }
  const letterCount = {};
  for (let letter of lowerWord1) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  for (let letter of lowerWord2) {
    if (!letterCount[letter]) {
      return false;
    }
    letterCount[letter]--;
  }
  return true;
}

console.log(isAnagram("sana","inay"))