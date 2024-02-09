let arr = [2, 3, 4, 5, 7, 77, 8, 9, 0, 1];
let num = 5;
let str = "Geeks for Geeks"

function removeWhiteSpace(str) {

    // \s Matches whitespace characters, including spaces, tabs and line breaks.
    // g flag is used to perform global search and replace, replacing all occurences.

   const result = str.replace(/\s/g,"")
   return result;
}

console.log(removeWhiteSpace(str))