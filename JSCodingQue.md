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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. How to check if an object is an array or not? Provide some code

Sol:-

function checkArray(elem){
    return console.log(Array.isArray(elem));
}

checkArray([]);
checkArray({});
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
3. How to empty an array in JavaScript? (do not reset it to a new array || do not run a loop through to pop each value)

Sol:-

let arr = [1,2,3,4,5];
arr = [];

console.log('setting arr value to empty',arr)

arr.length = 0;
console.log('setting arr length to zero',arr)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
5. Make this work :
    duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

Sol:- 

function duplicate(arr){
    return arr.concat(arr);
}

console.log(duplicate([1,2,3,4,5]));
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
7. Write a JavaScript function that checks whether a passed string is palindrome or not

Sol:-

function isPalindrome(str){
    let reversed =  str.split("").reverse().join("");
    return reversed === str;    
}

console.log(isPalindrome('loop'));
console.log(isPalindrome('lool'));
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
10. Write a JavaScript function which accepts an argument and return the type
Note : There are six possible values that typeof returns: object, boolean, function, number, string and undefined

Sol:-

function typeTeller(elem){
    return typeof elem;
}
console.log(typeTelloer(12));
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

console.log(countLargestarr(arr));
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

console.log(isFactorial(num));
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
29. Write a JavaScript program to find max/min value in a given array

Sol:-

let arr = [2, 3, 4, 5, 7, 77, 8, 9, 0, 1];

function maxFunction(arr) {
    return arr.reduce((pre,cur)=>{
        return pre > cur ?pre:cur;
    })
}

function minFunction(arr) {
    return arr.reduce((pre,cur)=>{
        return pre < cur ?pre:cur;
    })
}

console.log(maxFunction(arr))
console.log(minFunction(arr))
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
30. Write a JavaScript program to find Second Largest Value and remove First largest value in array

Sol:- 

let arr = [2, 3, 4, 5, 7, 77, 8, 9, 0, 1];

function findAndReplaceLargestWithSecondLargest(arr) {
    //Find the first largest value
    let firstLargestValue = Math.max(...arr);
    //find index of the first largest value
    let firstLargeIndex = arr.indexOf(firstLargestValue)
    //Remove the first largest value using splice
    arr.splice(firstLargeIndex, 1);
    //find the second largest value
    let secondLargestValue = Math.max(...arr);
    //return the largest value
    return secondLargestValue;
}

console.log(findAndReplaceLargestWithSecondLargest(arr));
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
31. Write a JavaScript program to find the missing number in a given integer array of 1 to 10?

Sol:- 

let arr = [2, 4, 5, 7, 8, 0];

function findMissingInteger(arr) {
    let missArray = [];
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    for (let i = minValue; i < maxValue; i++) {
        if (arr.indexOf(i) < 0) {
            missArray.push(i)
        }
    }
    return missArray;
}

console.log(findMissingInteger(arr));
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
32. Write a JavaScript program to find even or odd number in a given array?

Sol:-

let arr = [2, 4, 5, 7, 8, 0];
const even = arr.filter((i)=>{ return i%2===0 })
const odd = arr.filter((i)=>{ return i%2!==0 })

console.log('even',even,'======','odd',odd);
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
33. Write a JavaScript program to swap two variables without using third variable?

Sol:-

let a = 7;
let b = 8;
//with using third variable
// let temp = a;
// a = b;
// b = temp;
// console.log('a:', a, ':::::', 'b:', b)

//Without using third variable

[a, b] = [b, a]
console.log('a:', a, ':::::', 'b:', b)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
34. Write a JavaScript program to merge two arrays and sort them?

Sol:-

const arr1 = ['1', '3', '5', '7'];
const arr2 = ['2', '4', '6', '8'];

//Case I:-
let finalArray = arr1.concat(arr2);
let sortedArray = finalArray.toSorted((a, b) => a - b)
console.log('sortedArr', sortedArray)

//Case II:-
//Spread Operator
let resultArray = [...arr1, ...arr2];
console.log('sorted Array', resultArray.sort((a, b) => a - b))
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
33. Write a JavaScript program to find factos of a given integer?

Sol:-

const num = prompt('Please enter positive number');
console.log('factors of number',num)
for (let i =0;i<num;i++){
    if(num%i===0){
        console.log(i)
    }
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
35. Write a JavaScript program to compare two arrays are equal or not?

Sol:-

const arr1 = [1, 3, 5, 7];
const arr2 = [3, 1, 7, 5];

const isArrSame = arr1.length == arr2.length && arr1.every((curEle) => {
    if (arr2.indexOf(curEle) > -1) {
        return (curEle = [arr2.indexOf(curEle)])
    }
})

console.log(isArrSame)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
36. Write a JavaScript program to find intersection of two arrays/sets?

Sol:-

const arr1 = [2, 9, 6, 8, 4, 4, 4];
const arr2 = [4, 8, 6, 9, 12];

let intersectionArr = arr1.filter((ele) => {
    return arr2.includes(ele)
})

console.log([...new Set(intersectionArr)])
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
37. Write a JavaScript program to check armstrong number?

Sol:-
// abcd... = an+bn+cn+dn+....
// In the case of an armstrogn number of 3 digits the sum of cubes of each digit is equal to the number itself.
// for example, 371 is an armstrong number because
// 371 = 3*3*3+7*7*7+1*1*1;
// 371 = 27+343+1

let num = 371;
let temp = num;
let lengthOfDigit = num.toString().length;
let sum = 0;
while (temp > 0) {
    let digit = temp % 10;
    console.log(digit);
    sum += digit ** lengthOfDigit;
    console.log(sum);
    temp = parseInt(temp / 10);
    console.log(temp)
    console.log('----------')
}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
38. Write a JavaScript program to print star pattern in diamond shape?

Sol:-
// Run in web browser
//Right Triangle Shape Pattern

for (let i=1;i<=6;i++){
    for(let j=1;j<=i;j++){
        document.write("*"+"&nbsp;&nbsp;")
    }
    document.write('<br>')
}

//Pyramida Pattern
for (let i=1;i<=6;i++){
    for(let k=1;k<=6-i;k++){
        document.write("&nbsp;&nbsp;")
    }
    for(let j=1;j<=i;j++){
        document.write("*"+"&nbsp;&nbsp;")
    }
    document.write('<br>')
}

// Diamond Pattern
for (let i=1;i<=6;i++){
    for(let k=1;k<=6-i;k++){
        document.write("&nbsp;&nbsp;")
    }
    for(let j=1;j<=i;j++){
        document.write("*"+"&nbsp;&nbsp;")
    }
    document.write('<br>')
}
for(let i=1;i<=6;i++){
    for(let k =1;k<=i;k++){
        document.write("&nbsp;&nbsp;")
    }
    for(let j=1;j<=6-i;j++){
        document.write("*"+"&nbsp;&nbsp;")
    }
    document.write('<br>')
}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
39. Write a JavaScript program to find fibonacci sequence?

Sol:-

let a=0;;
let b=1;
let fibonacciLength = 15;
for (let i=0;i<=fibonacciLength;i++){
    let temp = a+b;
    a=b;
    b=temp;
    console.log(temp)
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
40. Write a JavaScript program to convert Kilometer(Km) into miles & celsius to fahrenheit(Vice Versa)?

Sol:-

//Converting Celsius to Fahrenheit
// Celsius to Fahrenheit formula
// fahrenheit = celsius*1.8+32
// Fahrenheit to Celsius formula
// celsius=5/9 x (fahrenheit-32)

;let deg = 18
let calciusToFn = deg*1.8+32;
let fnToCalsius = 5/9 * (deg-32);
console.log('calciusToFn',calciusToFn, 'fnToCalsius',fnToCalsius)

//Converting KM to miles
// conversion of Km to miles
// 1 Kilometer = 0.621371 miles
// miles  = Kilometer * factor

let dist = 100;
// Km to miles
const factor = 0.621371
const kmToMiles = dist * factor;
console.log(kmToMiles)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
41. Write a program to find most recurring character from a string;
Sol:-

let input = "Hello Buddy Are you there";

function getMax (str) {
 let max = 0,
     maxChar = '';
  str.split('').forEach(function(char){
    if(str.split(char).length > max) {
        max = str.split(char).length-1;
        maxChar = char;
     }
  });
  return {maxChar,max};
};
--------------------------------------------------------------------------------------------------------------------------------------------------------------------