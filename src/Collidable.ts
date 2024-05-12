import Point from "./Point";
import Actor from "./Actor";

interface Collidable extends Actor {
  position: Point;
  didCollideWithObject(other: Collidable): boolean;
  type: string;
}
export default Collidable;
