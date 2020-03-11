// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
    
  }
  
  get perimeter() {
    let perimeter = 0;
    for (const side of this.sides) {
      perimeter += side;
    }
    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    console.log(this.sides[9])
    if ((this.countSides === 3) && 
        (((this.sides[0] + this.sides[1]) > this.sides[2]) || 
         ((this.sides[1] + this.sides[2]) > this.sides[0]) || 
         ((this.sides[2] + this.sides[0]) > this.sides[1]))) {
            return true;
      } else {
      return false;
    }
    
  }
}