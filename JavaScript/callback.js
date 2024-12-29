function databaseSharing(){
    console.log("Data Stored Successfully");
}
function submitForm(formMsg,dbs){
    setTimeout(()=>{
        dbs()
        console.log(formMsg)
    },1000)
}
submitForm("Form Submitted Successfully",databaseSharing)