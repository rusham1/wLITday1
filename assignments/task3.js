//Write a program to find the area of a cylinder using JavaScript 
// objects (radius, height and the area function should be in the object). 
// (Area of a Cylinder= pi*r^2*h)

const pi=3.14;
cylinder={

    r:7,
    h:7,
    area:function(){
        return pi*(this.r**2)*this.h;
    }
}   
console.log("The area is "+cylinder.area())