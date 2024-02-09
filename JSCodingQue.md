1. Given a string, reverese each word in a string?

Sol:- 


let str = "Help Me out Learning JavaScript";
CaseI:-
let savedStr = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
});

CaseII:-
//using for loop
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log('saved array',savedStr.join(" "))
----------------------------------------------------------------------------------
2. How to check if an object is an array or not? Provide some code

Sol:-

function checkArray(elem){
    return console.log(Array.isArray(elem));
}

checkArray([]);
checkArray({});
----------------------------------------------------------------------------------
3. How to empty an array in JavaScript? (do not reset it to a new array || do not run a loop through to pop each value)

Sol:-

let arr = [1,2,3,4,5];
arr = [];

console.log('setting arr value to empty',arr)

arr.length = 0;
console.log('setting arr length to zero',arr)
----------------------------------------------------------------------------------
4. How would you check if a number is an integer?

Sol:- 

Case I:
//Number.isInteger()

Case II:
let a = 10.0;
if(a%1 === 0){
    console.log('Integer')
}else{
    console.log('Not an integer')
}
----------------------------------------------------------------------------------
5. Make this work :
    duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

Sol:- 

function duplicate(arr){
    return arr.concat(arr);
}

console.log(duplicate([1,2,3,4,5]));
----------------------------------------------------------------------------------
6. Write a JavaScript function that reverse a number?

Sol:- 

Case I:-

function reverse(num){
    return Number(num.toString().split('').reverse().join(''));
}

console.log(reverse(43))

Case II:-

function reverse(num){
    let rev = 0;
    while (num>0){
        let rem = num%10;
        rev = rev*10+rem;
        num = Math.floor(num/10);
    }

    return rev;
}

console.log(reverse(51234));
----------------------------------------------------------------------------------
7. Write a JavaScript function that checks whether a passed string is palindrome or not

Sol:-

function isPalindrome(str){
    let reversed =  str.split("").reverse().join("");
    return reversed === str;    
}

console.log(isPalindrome('loop'));
console.log(isPalindrome('lool'));
----------------------------------------------------------------------------------
8. Write a JavaScript function that returns a passed string with letters in alphabetical order

Sol:-

let str = 'apple';

Case I:-

(With the help of sort)
function getAlphabeticalOrder(str){
    return str.split('').sort().join('')
}

Case II:-

(Without the help of sort)
function getAlphabeticalOrder(inputString) {
    // Convert the string to an array of characters
    const charArray = inputString.split('');
    // Perform bubble sort
    for (let i = 0; i < charArray.length - 1; i++) {
      for (let j = 0; j < charArray.length - i - 1; j++) {
        if (charArray[j] > charArray[j + 1]) {
          // Swap the characters
          const temp = charArray[j];
          charArray[j] = charArray[j + 1];
          charArray[j + 1] = temp;
        }
      }
    }
  
    // Join the characters back into a string
    const alphabetizedString = charArray.join('');
    return alphabetizedString;
  }

console.log(getAlphabeticalOrder('asdfg'));
----------------------------------------------------------------------------------
9. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

Sol:-

let str = "Hello bhai kese ho";
function capitalizeString(str){
    let CapWords = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1)
    })
    return CapWords.join(' ');
}

console.log(capitalizeString(str));
----------------------------------------------------------------------------------
10. Write a JavaScript function which accepts an argument and return the type
Note : There are six possible values that typeof returns: object, boolean, function, number, string and undefined

Sol:-

function typeTeller(elem){
    return typeof elem;
}
console.log(typeTelloer(12));
----------------------------------------------------------------------------------
11. Write a JavaScript function to get the number of occurrences of each letter in specified string

Sol:- 

let str = "hello buddy";
function getOccurences(str){
    let occurences = {};
    str.split('').forEach(function(elem){
        occurences.hasOwnProperty(elem)?occurences[elem]++:occurences[elem]=1;
    })
    return occurences;
}

console.log(getOccurences(str));
----------------------------------------------------------------------------------
12. loop an array and add all members of it

Sol:-

let arr = [1,2,3];
function addArray(arr){
    let sum = 0;
    arr.forEach(function(elem){
        sum = sum+elem;
    })
    return sum;
};

console.log(addArray(arr));
----------------------------------------------------------------------------------
13. In an array of numbers and strings, only add those members which are not strings

Sol:-

let arr = [10,20,30,"asdasd",5,6,"asds"];
function addArray(arr){
    let sum = 0;
    arr.forEach(function(elem){
        if(typeof elem =='number'){
            sum = sum+elem;
        }
    })
    return sum;

}

console.log(addArray(arr));
----------------------------------------------------------------------------------
14. Loop an array of objects and remove all objects which don't have gender's value male

Sol:-

let arr = [
    {name:"abc",gender:'male'},
    {name:'def',gender:'female'},
    {name:"ghi",gender:'nonspecified'},
    {name:'jkl',gender:'male'},
    {name:"mno",gender:'male'},
    {name:'pqr',gender:'female'},
    {name:"stu",gender:'male'},
    {name:'vwx',gender:'female'},
];

var newArr = arr.filter((elem)=>{
    return elem.gender==='male';
})

console.log('arr',newArr);

Case II:-
count = arr.length;
for (let i=1; i<=count;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j].gender!=='male'){
            arr.splice(j,1)
        }
    }
}

console.log('arr',arr);
----------------------------------------------------------------------------------
15. Write a javascript function to clone an array

Sol:-

let arr = [1,2,3,4];
function cloneArr(arr){
    var newArrr = [];
    arr.forEach((e)=>{
        newArr.push(e)
    })
    return newArr;
}

Case II:-
function cloneArr(arr){
    return arr.map((e)=>{
        return e;
    })
    
}
let newArr = cloneArr(arr);

console.log(cloneArr(arr));
----------------------------------------------------------------------------------
16. Write a JavaScript function to get first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Sol:-

let arr = [1, 2, 3, 4, 5];
function retrieveFirst(arr, n = 1) {
    if (n <= arr.length) {
        for(let i=0;i<n;i++){
            console.log(arr[i])
        }
    }else{
        console.log('elements length exceeded')
    }
}

retrieveFirst(arr, 2);
----------------------------------------------------------------------------------
17. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

Sol:-

let arr = [1, 2, 3, 4, 5];
function retrieveLast(arr, n = 1) {
    if (n <= arr.length) {
        for(let i=0;i<n;i++){
            console.log(arr[arr.length-1 - i])
        }
    }else{
        console.log('elements length exceeded')
    }
}

retrieveLast(arr, 4);
----------------------------------------------------------------------------------
18. Write a JavaScript program to find the most frequent item of an array

Sol:-

let arr = [1, 2, 3, 4, 4, 2, 4, 5, 3, 5];
function freqItem(arr) {
    let freq = {};
    arr.forEach((e) => {
        freq.hasOwnProperty(e) ? freq[e]++ : freq[e] = 1;
    })
    let ans = Object.keys(freq).reduce((acc, next) => {
        return freq[acc] > freq[next] ? acc : next;
    })
    console.log('ans', ans)
}

freqItem(arr);
----------------------------------------------------------------------------------
19. Write a JavaScript program to shuffle an array

Sol:- 

let arr = [1, 2, 3, 4, 5, 6, 7];
function shuffleArray(arr) {
    let totalArea = arr.length;//Total Shuffle Area
    while (totalArea > 0) {
        totalArea--;
        let indexToChange = Math.floor(Math.random() * totalArea);//generate a random number
        let temp = arr[totalArea];
        arr[totalArea] = arr[indexToChange];
        arr[indexToChange] = temp;
    }
    return arr;
}

console.log(shuffleArray(arr));
----------------------------------------------------------------------------------
20. Write a JavaScript program to compute the union of two arrays
Sample Data : 
console.log(union([1,2,3],[100,2,1,10]));
Output :- [1,2,3,10,100];

Sol:-

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [1,2,100,10,4];
function union(arr1,arr2) {
  return [...new Set(arr1.concat(arr2))];
};

console.log(union(arr,arr2));
----------------------------------------------------------------------------------
21. Write a func that returns the longest word in the sentence?

Sol:-

let str = "I love coding in JavaScript";

function longestWord(str) {
    let longestWord = "";
    str.split(' ').forEach((e) => {
        if (e.length > longestWord.length)
            longestWord = e;
    });
    return longestWord;
}

console.log(longestWord(str));
----------------------------------------------------------------------------------
22. Write a func to remove duplicate elements from an array?

Sol:-

let arr = [1,2,3,4,5,5,5,5,6,7,7,7,7,8];

Case I:-
function returnDuplicasy(arr) {
    const uniqeElement = [];
    for(const element of arr){
        if(uniqeElement.indexOf(element) === -1){
            uniqeElement.push(element)
        }
    }
    return uniqeElement;
};

console.log(returnDuplicasy(arr))

Case II:-
function removeDuplicasy(arr){
    //converting into sets
    return [...new Set(arr)];
};

console.log(removeDuplicasy(arr))
----------------------------------------------------------------------------------
23. Write a func that checks whether two strings are anagrams or not?
//Anagrams is a word formed by rearranging the letters of another word

Sol:-

let str1 = 'listen';
let str2 = 'silent';

function isAnagram(str1, str2) {
    const sortedArr1 = str1.split('').sort().join('');
    const sortedArr2 = str2.split('').sort().join('');
    return sortedArr1 === sortedArr2;
}

console.log(isAnagram(str1, str2));
----------------------------------------------------------------------------------
24. Write a func that returns the number of vowels in a string?

Sol:-

let str = 'Geeks For Geks';

function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels(str));
----------------------------------------------------------------------------------
25. Write a func to find the largest number in an array?

Sol:-

let arr = [2,3,4,5,7,77,8,9,0,1];

function countLargestarr(arr) {
    let largest = arr[0];

    for (let i=1; i<arr.length; i++) {
        if (arr[i]>largest) {
            largest = arr[i]
        }
    }
    return largest;
}

console.log(countLargestarr(arr))

----------------------------------------------------------------------------------
26. Write a func to check if a given number is prime or not?

Sol:-

let num = 7;

function isPrime(num) {
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

console.log(isPrime(num));
----------------------------------------------------------------------------------
27. Write a func to calculate factorial of a number?

Sol:-

let num = 5;

function isFactorial(num) {
    if (num === 0) {
        return 1;
    }

    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(isFactorial(num))


----------------------------------------------------------------------------------
28. Write a program to remove all whitespace characters from a string? 

Sol:-

let str = "Geeks for Geeks"

function removeWhiteSpace(str) {

    // \s Matches whitespace characters, including spaces, tabs and line breaks.
    // g flag is used to perform global search and replace, replacing all occurences.

   const result = str.replace(/\s/g,"")
   return result;
}

console.log(removeWhiteSpace(str));
----------------------------------------------------------------------------------
