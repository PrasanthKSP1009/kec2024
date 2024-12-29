// Location Finder Example
function isTimeConsumtion(t){
    time = 1000
    return time <= t;
}
function isValidLocation(loc){
    location = "Ooty"
    return loc == location
}
function locationFinder(){
    loc = "Ooty"
    time = 1000
    return new Promise((locFound,locNotFound)=>{
        setTimeout(() => {
            if(isValidLocation(loc) && isTimeConsumtion(time)){
                locFound("Location Found")
            }
            else{
                locNotFound("Location Not Found")
            }
        }, time);
    })
}
locationFinder().then((resolvedMsg)=>{
    console.log(resolvedMsg);
}).catch(function(rejectedMsg){
    console.log(rejectedMsg);
})

