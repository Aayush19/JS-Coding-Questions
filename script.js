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