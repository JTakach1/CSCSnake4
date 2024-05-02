import display from "./display";
import Snake from "./Snake";

class Point {
  private xcoord: number;
  private ycoord: number;

  constructor(xcoord: number, ycoord: number) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  }
  get x(): number {
    return this.xcoord;
  }
  get y(): number {
    return this.ycoord;
  }
}

export default Point;
