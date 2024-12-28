// Operators
// 1. Assignment Operator

a = 10
console.log(a);

// 2. Unary Operator
a++; // Post increment
console.log(a);

// 3. Arithemetic Operator

var var1 = 10
var var2 = 20
var sum = var1+var2
console.log(sum);

// 4. Relational Operator

var rel1 = 30
var rel2 = "30"
if (rel1 == rel2){
    console.log("Both values are same not types so it's printing true\n== will just check for values not datatypes");
    console.log(rel1 == rel2);
}
if (rel1 === rel2){
    console.log("Both values are same not types so it's printing false\n=== will check for both content and datatype");
    console.log(rel1 === rel2);
}
else{
    console.log("Both values are same not types so it's printing false\n=== will check for both content and datatype");
    console.log(rel1 === rel2);
}

// 5.Logical operator

var log1 = 10
var log2 = 15
console.log(log1 & log2);

// 6. Bitwise Operator

var bit1 = 10
console.log(bit1 >> 2);