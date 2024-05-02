import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below
// >1 ^2 <3 v4
class Snake {
  private currentDirection: number;
  private currentPosition: Point;
  constructor(x: number = 0, y: number = 0) {
    this.currentDirection = 1;
    this.currentPosition = new Point(x, y);
  }
  move(numberOfSquares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.currentPosition.x + numberOfSquares,
        this.currentPosition.y,
      );
    } else if (this.currentDirection === 2) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + numberOfSquares,
      );
    } else if (this.currentDirection === 3) {
      this.currentPosition = new Point(
        this.currentPosition.x - numberOfSquares,
        this.currentPosition.y,
      );
    } else {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - numberOfSquares,
      );
    }
  }

  turnLeft() {
    if (this.currentDirection === 1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 3;
    } else if (this.currentDirection === 3) {
      this.currentDirection = 4;
    } else {
      this.currentDirection = 1;
    }
  }

  turnRight() {
    if (this.currentDirection === 1) {
      this.currentDirection = 4;
    } else if (this.currentDirection === 4) {
      this.currentDirection = 3;
    } else if (this.currentDirection === 3) {
      this.currentDirection = 2;
    } else {
      this.currentDirection = 1;
    }
  }

  get position() {
    return this.currentPosition;
  }

  get direction() {
    return this.currentDirection;
  }
}
export default Snake;
