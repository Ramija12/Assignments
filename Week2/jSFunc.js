const { log } = require("node:console")


function userProfile(name){
    console.log(`Hello,${name}`);
    
}
userProfile("Rami")
let double  = (number)=>{
    return number*number
}
console.log(double(23))

setTimeout (function(){
    console.log("This message is delayed by 2 seconds");
    
})

function getUserData(callback){
    setTimeout(function(){
        console.log("This message is delayed by 2 seconds");
        
    },2000)
    callback()
}

getUserData(function(){
    console.log("callback function");
    
})