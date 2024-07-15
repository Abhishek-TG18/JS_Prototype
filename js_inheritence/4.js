class shapes{
    constructor(){
        this.shape = "shape"
    }

    calculatePerimeter(){
        console.log(" perimter is not defined ");
    }

    calculateArea(){
        console.log(" area is not defined ");

    }
}

class circle extends shapes{
    constructor(rad){
        super();
        this.type="circle";
        this.radius=rad;
    }

    calculateArea(){
        return Math.PI*this.radius*this.radius;
    }

    calculatePerimeter(){
        return 4*Math.PI*this.radius;
    }
}


class rectangle extends shapes{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;

    }

    calculateArea(){
        return this.length*this.breadth;
    }
}