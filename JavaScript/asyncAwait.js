async function funName(){
    setTimeout(()=>{
        console.log("Hello"); 
    },1000)
    return(await "Hello")
}
arrowFunName = async() =>{
    setTimeout(()=>{
        console.log("KEC"); 
    },1000)
    return(await "KEC")
}
funName().then((a)=>{
    console.log(a);
})
console.log(arrowFunName())