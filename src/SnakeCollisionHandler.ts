import Collidable from "./Collidable";
import CollisionHandler from "./CollisionHandler";
import Snake from "./Snake";
class SnakeCollisionHandler implements CollisionHandler {
  applyAction(snake1: Collidable, snake2: Collidable): void {
    if (snake1 instanceof Snake && snake2 instanceof Snake) {
      snake1.die();
    }
  }
}
export default SnakeCollisionHandler;
