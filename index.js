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
    if (this.countSides == 3) {
      return true;
    } else {
      return false;
    }
    
  }
}