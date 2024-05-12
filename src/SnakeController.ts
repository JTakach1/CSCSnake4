import Snake from "./Snake";
import WorldModel from "./WorldModel";

class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  constructor(snakeWorld: WorldModel, slitherer: Snake) {
    this.snakeWorld = snakeWorld;
    this.slitherer = slitherer;
  }
  turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  turnSnakeRight() {
    this.slitherer.turnRight();
  }
  get snakePosition() {
    return this.slitherer.position;
  }
  get snakeDirection() {
    return this.slitherer.direction;
  }
  get worldWidth() {
    return this.snakeWorld.WorldWidth;
  }
  get worldHeight() {
    return this.snakeWorld.WorldHeight;
  }
}

export default SnakeController;
