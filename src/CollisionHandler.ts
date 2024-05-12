import Collidable from "./Collidable";
interface CollisionHandler {
  applyAction(object1: Collidable, object2: Collidable): void;
}
export default CollisionHandler;
