// Write a JavaScript function that accepts a number as a parameter and 
// checks whether the number is positive or not.
function positiveOrNot(num){
    if (num>0){
        return (num+ " is positive.");
    }
    else if (num<0){
            return (num+ " is negative.");
    }
    else{
        return (num+ " is zero.");
    }
}

console.log(positiveOrNot(1));
console.log(positiveOrNot(-1));
console.log(positiveOrNot(0));
