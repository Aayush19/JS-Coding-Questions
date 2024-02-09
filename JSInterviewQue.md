1. What is Closure?
Ans:- JavaScript closure is a feature that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. A block is also treated as a scope since ES6. Since JavaScript is event-driven so closures are useful as it helps to maintain the state between events.

Example:-

let addTo = function (passed) {
    let add = function (inner) {
        return passed + inner;
    }
    return add;
}
let addThree = addTo(3)
console.dir(addThree);//returns 
console.log(addThree(2))
console.log(addTo(3)(2))

2. What is Hoisting?
3. What is This and Context in JS
Ans:-

Example:-
const object = {
    message:"Hello, World!",
    getMessage(){
        const message= "Hello, Earth!";
        return this.message
    }
};
console.log(object.getMessage());