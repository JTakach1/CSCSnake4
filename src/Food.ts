import Actor from "./Actor";
import Point from "./Point";

class Food implements Actor {
  private currentPosition: Point;
  private isCurrentlyActive: Boolean;

  constructor(x: number, y: number) {
    this.currentPosition = new Point(x, y);
    this.isCurrentlyActive = true;
  }

  update(): void {}

  eat() {
    this.isCurrentlyActive = false;
  }

  public get position() {
    return this.currentPosition;
  }

  public get isActive() {
    return this.isCurrentlyActive;
  }

  public get type() {
    return "Food";
  }

  move(): void {}
}
export default Food;
