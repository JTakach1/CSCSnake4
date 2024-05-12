import Food from "./Food";
import Collidable from "./Collidable";
import CollisionHandler from "./CollisionHandler";
import Snake from "./Snake";

class SnakeFoodCollisionHandler implements CollisionHandler {
  applyAction(object1: Collidable, object2: Collidable): void {
    let snake: Snake;
    let food: Food;

    if (object1 instanceof Snake && object2 instanceof Food) {
      snake = object1;
      food = object2;
    } else if (object1 instanceof Food && object2 instanceof Snake) {
      snake = object2;
      food = object1;
    } else {
      throw new Error("Invalid types for SnakeFoodCollisionHandler");
    }
    food.eat();
    snake.grow();
  }
}
export default SnakeFoodCollisionHandler;
