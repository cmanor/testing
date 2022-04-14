//reverse a number
const chaChaSlide = (n) => 
  Array.from(n.toString()).reverse().join('');

//string in alphabetical order
const aOrder = (str) => 
  Array.from(str).sort().join('');

  //first letter of each word to uppercase.

const uppercase = (str) => 
{
  var array1 = str.split(' ');
  var newarray1 = [];
  for(var x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
//   check if a number is prime.
function testPrime(n) {
  if (n===1) {
    return false;
} else if(n === 2) {
    return true;
  }else {
    for(var i = 2; i < n; i++) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;  
  }
}
// extract unique characters.

function unique_char(str1) {
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++) {
    if(uniql.indexOf(str.charAt(x))==-1) {
        uniql += str[x];  
   }
  }
  return uniql;  
}  


let sleepyTime = () => true;

function deez(func) {
    func()
}

console.log(chaChaSlide(349210));
console.log(aOrder("weebmaster"));
console.log(uppercase("the quick brown fox"));
console.log(testPrime(69));
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

module.exports = {chaChaSlide, aOrder, uppercase, testPrime, unique_char, deez, sleepyTime};