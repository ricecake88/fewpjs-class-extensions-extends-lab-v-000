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
    for let side of this.sides {
      perimeter += side;
    }
    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    
  }
}