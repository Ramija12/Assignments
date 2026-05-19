
function intersection(arr1,arr2){

    var result = []
    for(i=1;i<=arr1.length;i++){
        if(arr2.includes(arr1[i])&& !result.includes(arr1[i]))
        {
          result.push(arr1[i])
         
        }

    }
    return result
}
console.log(intersection([1,2,3],[2,3,4]))