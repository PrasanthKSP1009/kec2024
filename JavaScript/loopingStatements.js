array = [10,20,30,[40.5,50.6],"a","KEC",true]
// console.log(array);

// 1.for...in Loop
// for (var a in array){
//     console.log("Element present in index",a,"is",array[a])
// }

// 2. for...of loop

// for(var b of array){
//     console.log(b);
// }

// 3. foreach
// Example 1

// array.forEach((index,element)=>{
//     console.log("Index is", index, "and it's Element is",element);
// })

// Example 2
objType1 = {
    "firstName": "Jai",
    "lastName" : "Kumar",
    "age" : 20
}
console.log(objType1);
for (key in objType1){
    value = objType1[key]
    console.log(key,value)
}