// 1. variables
// var, let, const ->refer to declaration.js

// 2. Arrow Function
// arrowFun = (studentsDept) => {
//     return studentsDept[0]
// }
// console.log(arrowFun(['AIML,CSE,IT', "AIML", "CSE","IT"]))

// 3. Destructuring Operator

// var marks = [90,95,93]
// var [m1,m2] = marks
// console.log(m1,m2);

// 4. Ternary Operator

// a = 11
// out = (a%2 == 0)? "Even" : "Odd"
// console.log(a,"is",out);

// 5. Spread Operator

// arr1 = [10,20,30]
// arr2 = [40, 50, 60]
// arr3 = [...arr1,...arr2]
// console.log(arr3);

// 6. Rest Operator

// function restOp(...arr1){
//     clg(arr1)
// }
// restOp(a,b,c)

// 7.Scope
// var a = 5
// const pi = 3.14
// console.log("o",pi);
// console.log("o",a);
// {
//     a = 10
//     let b = 10.5
//     console.log("b",a);
//     console.log("b",b);
// }
// console.log("o",pi);
// console.log("o",a);

// 8. Hoisting 
/*
console.log(a);
const a = 10
console.log(a);

Output: undefined
10
*/
/*
console.log(a);
const a = 10
console.log(a);

Output: ReferenceError: Cannot access 'a' before initialization
*/

/*
console.log(a);
let a = 10
console.log(a);

Output: ReferenceError: Cannot access 'a' before initialization
*/