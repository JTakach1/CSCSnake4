import Collidable from "./Collidable";
import CollisionHandler from "./CollisionHandler";
import SnakeCollisionHandler from "./SnakeCollisionHandler";
import SnakeFoodCollsionHandler from "./SnakeFoodCollisionHandler";

class ActorCollisionHandler {
  private pairs: Map<string, CollisionHandler>;
  constructor() {
    this.pairs = new Map();
    this.pairs.set(this.toKey("Snake", "Food"), new SnakeFoodCollsionHandler());
    this.pairs.set(this.toKey("Snake", "Snake"), new SnakeCollisionHandler());
  }
  toKey(colliderType: string, collidedType: string): string {
    return colliderType + "," + collidedType;
  }
  addCollisionAction(
    colliderType: string,
    collidedType: string,
    actionApplicator: CollisionHandler,
  ) {
    const key = this.toKey(colliderType, collidedType);
    this.pairs.set(key, actionApplicator);
  }
  hasCollisionAction(colliderType: string, collidedType: string): boolean {
    const key = this.toKey(colliderType, collidedType);
    return this.pairs.has(key);
  }
  applyCollisionAction(colliderType: Collidable, collidedType: Collidable) {
    const key = this.toKey(colliderType.type, collidedType.type);

    if (this.pairs.has(key)) {
      const handler = this.pairs.get(key);
      if (handler) {
        handler.applyAction(colliderType, collidedType);
      }
    }
  }
}
export default ActorCollisionHandler;
