import Collidable from "./Collidable";
import Point from "./Point";

// ^ 1  < 2  \/ 3  > 4

class Snake implements Collidable {
  public currentParts: Point[];
  private currentPosition: Point;
  private currentDirection: string;
  public color: string;
  private startingPosition = new Point(0, 0);

  private isCurrentlyActive: boolean;

  constructor(
    color: string,
    startingPosition: Point = new Point(0, 0),
    direction: string = "right",
    size: number,
    isCurrentlyActive = true,
  ) {
    this.isCurrentlyActive = isCurrentlyActive;
    this.color = color;
    this.startingPosition = startingPosition;
    this.currentPosition = new Point(startingPosition.x, startingPosition.y);
    this.currentParts = [];
    this.currentDirection = direction;

    for (let i = 0; i < size; i++) {
      let part;
      switch (direction) {
        case "right":
          part = new Point(startingPosition.x - i, startingPosition.y);
          break;
        case "left":
          part = new Point(startingPosition.x + i, startingPosition.y);
          break;
        case "up":
          part = new Point(startingPosition.x, startingPosition.y + i);
          break;
        case "down":
          part = new Point(startingPosition.x, startingPosition.y - i);
          break;
        default:
          part = new Point(startingPosition.x - i, startingPosition.y);
          break;
      }
      this.currentParts.push(part);
    }
  }
  public grow() {
    const tail = this.currentParts[this.currentParts.length - 1];
    let newPoint;

    switch (this.direction) {
      case "right":
        newPoint = new Point(tail.x + 1, tail.y);
        break;
      case "left":
        newPoint = new Point(tail.x - 1, tail.y);
        break;
      case "up":
        newPoint = new Point(tail.x, tail.y - 1);
        break;
      case "down":
        newPoint = new Point(tail.x, tail.y + 1);
        break;
      default:
        newPoint = new Point(tail.x - 1, tail.y);
        break;
    }

    this.currentParts.push(newPoint);
  }

  public get direction(): string {
    return this.currentDirection;
  }

  public get head(): Point {
    return this.currentParts[0];
  }

  public get position(): Point {
    return this.currentPosition;
  }

  public setPosition(newPosition: Point) {
    this.currentPosition = newPosition;
  }

  public setDirection(newDirection: string) {
    this.currentDirection = newDirection;
  }

  public get parts(): Point[] {
    return this.currentParts;
  }
  public get type(): string {
    return "Snake";
  }
  public get size(): number {
    return this.currentParts.length;
  }
  public update() {
    this.move(1);
  }
  public die() {
    this.isCurrentlyActive = false;
  }

  public set direction(newDirection: string) {
    this.currentDirection = newDirection;
  }

  public didCollideWithObject(other: Collidable): boolean {
    if (!(other instanceof Snake)) {
      return this.position.equals(other.position);
    } else {
      const otherSnake = other as Snake;
      if (this === otherSnake) {
        return this.currentParts
          .slice(1)
          .some((part) => part.equals(this.head));
      } else {
        return otherSnake.currentParts.some((part) => part.equals(this.head));
      }
    }
  }
  public move(squares: number) {
    for (let i = this.currentParts.length - 1; i > 0; i--) {
      this.currentParts[i] = this.currentParts[i - 1];
    }
    let head = this.currentParts[0];
    let newX = head.x;
    let newY = head.y;
    if (this.direction === "right") {
      newX += squares;
    } else if (this.direction === "left") {
      newX -= squares;
    } else if (this.direction === "up") {
      newY -= squares;
    } else if (this.direction === "down") {
      newY += squares;
    }
    this.currentPosition = new Point(newX, newY);
    this.currentParts[0] = this.currentPosition;
  }

  public turnRight() {
    if (this.currentDirection === "right") {
      this.currentDirection = "down";
    } else if (this.currentDirection === "down") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "left") {
      this.currentDirection = "up";
    } else this.currentDirection = "right";
  }
  //turns the snake to the left
  public turnLeft() {
    if (this.currentDirection === "right") {
      this.currentDirection = "up";
    } else if (this.currentDirection === "up") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "left") {
      this.currentDirection = "down";
    } else this.currentDirection = "right";
  }
  public turnDown() {
    this.currentDirection = "down";
  }
  public turnUp() {
    this.currentDirection = "up";
  }
}
export default Snake;
