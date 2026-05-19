function Type(num) {
    
    if (num>0)
    {
        return `Value greater than zero ${num}`
        
    }else if(num<0){

        return `Value less than zero ${num}`
        
    }else
        return `Value is equal to zero ${num}`
       
}
let number = 10 
console.log(Type(number))