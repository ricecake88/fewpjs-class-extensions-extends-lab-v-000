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
    if ((this.countSides === 3) && 
        (((this.sides[0] + this.sides[1]) > this.sides[2]) && 
         ((this.sides[1] + this.sides[2]) > this.sides[0]) && 
         ((this.sides[2] + this.sides[0]) > this.sides[1]))) {
            return true;
      } 
  return false;
    
  }
}

class Square extends Polygon {
  get isValid() {
    console.log(this.side[0])
    if ((this.countSides === 4) &&
       (this.side[0] === this.side[1]) &&
       (this.side[1] === this.side[2]) &&
       (this.side[2] === this.side[3]) &&
       (this.side[3] === this.side[0])) {
      return true;
    } else {
      return false;
    }
  }
  
  get area() {
    if (this.isValid === true) {
      return this.side[0]*this.side[1];
    }
  }
}