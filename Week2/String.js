let s = "Hello World" 
let k = s.split(" ")
let result = []
function value(){
for (let index = 0; index < k.length; index++) {
     result = k[index]   
}
return result.length
}
console.log(value());
//assignment 2

let m = " fly me   to   the moon " 
let n = m.trim().split(" ")
let result1 = []
function value1(){
for (let i = 0; i < n.length; i++) {
     result1 = n[i]   
}
return result1.length
}
console.log(value1());
//anagram
function isAnagram(value1,value2){
    
        let str1 = value1.trim().toLowerCase()
        let str2 = value2.trim().toLowerCase()
        let total1=str1.split("").sort().join("")
        let total2 =str2.split("").sort().join("")
        console.log(total1);
        console.log(total2);
        
        
        if (total1===total2)
        {
            console.log("is anagram");
            
        }else
            console.log(("not anagram"));
    
}
isAnagram('hello','world')


