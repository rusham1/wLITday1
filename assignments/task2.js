// Write a JavaScript function to find the largest number in an array given as 
// the parameter. (Use arrow function).

largest = (num) =>{
    larg=num[0];
    for (i=1;i<num.length;i++){
        if (larg<num[i]){
            larg=num[i];
        }
    }
    return("The largest number in the array is "+larg);
}

arr=[3,5,1,6,7]
console.log(largest(arr))

// ((num) =>{
//     larg=num[0];
//     for (i=1;i<num.length;i++){
//         if (larg<num[i]){
//             larg=num[i];
//         }
//     }
//     console.log("The largest number in the array is "+larg);
// })([3,5,1,6,7])