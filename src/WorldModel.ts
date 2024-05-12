import Snake from "./Snake";
import IWorldView from "./IWorldView";
import ActorCollisionHandler from "./ActorCollisionHandlers";
import ArrayIterator from "./ArrayIterator";
import Collidable from "./Collidable";

class WorldModel {
  private allSnakes: Snake[];
  private allViews: IWorldView[];
  private width: number;
  private height: number;
  private aca: ActorCollisionHandler;

  constructor(thewidth: number, theheight: number, aca: ActorCollisionHandler) {
    this.allSnakes = [];
    this.allViews = [];
    this.width = thewidth;
    this.height = theheight;
    this.aca = aca;
  }
  get snake(): Snake[] {
    return this.allSnakes;
  }

  addActors(snake: Snake[]) {
    this.allSnakes = this.allSnakes.concat(snake);
  }

  addView(view: IWorldView) {
    this.allViews.push(view);
  }

  get position() {
    return new ArrayIterator(this.snake);
  }
  get views() {
    return this.allViews;
  }
  get WorldWidth() {
    return this.width;
  }
  get WorldHeight() {
    return this.height;
  }

  public update(steps: number) {
    const isCollidable = (object: any): object is Collidable => {
      return "didCollideWithObject" in object;
    };
    let collidedArray: Snake[] = [];
    // Iterate over allSnakes and call move on each Snake instance
    this.allSnakes.forEach((snake) => {
      snake.move(steps);
    });

    this.allSnakes.forEach((snake, i) => {
      this.allSnakes.forEach((other, j) => {
        if (
          i !== j &&
          isCollidable(snake) &&
          isCollidable(other) &&
          snake.didCollideWithObject(other)
        ) {
          // Avoid adding the same snake more than once
          if (!collidedArray.includes(snake)) {
            collidedArray.push(snake);
            console.log("COLLISION", collidedArray);
          }
        }
      });
    });
    // Remove collided snakes
    collidedArray.forEach((collided) => {
      const index = this.allSnakes.indexOf(collided);
      if (index > -1) {
        this.allSnakes.splice(index, 1);
      }
    });

    // Update all views once after handling game logic
    this.allViews.forEach((view) => {
      view.display(this);
    });

    console.log(this.allSnakes);
  }
}
export default WorldModel;
