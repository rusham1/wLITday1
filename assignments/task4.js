//Write a program to find the area of a square and a rectangle 
// using JavaScript objects with a common area function. (Use this keyword). 
// (Area of a Rectangle/Square = length * breadth)

shape={
    length:10,
    breadth:20,
    areaSquare(){
        return ("The area of square is "+this.length*this.length)
    },
    areaRect(){
        return("The area of rectangle is "+(this.length)*(this.breadth))
    }
}
console.log(shape.areaSquare())
console.log(shape.areaRect())