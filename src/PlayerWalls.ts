import Player from "./Player";
import SnakeController from "./SnakeController";
import Snake from "./Snake";

class AvoidWallPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  makeTurn() {
    if (
      this.sc.snakeDirection === -1 &&
      this.sc.snakePosition.x === 0 &&
      this.sc.snakePosition.y < this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeLeft();
    } else if (this.sc.snakeDirection === -1 && this.sc.snakePosition.x === 0) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakeDirection === 2 &&
      this.sc.snakePosition.x < this.sc.worldWidth / 2 &&
      this.sc.snakePosition.y === this.sc.worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakeDirection === 2 &&
      this.sc.snakePosition.y === this.sc.worldHeight
    ) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakeDirection === 1 &&
      this.sc.snakePosition.x === this.sc.worldWidth &&
      this.sc.snakePosition.y < this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    } else if (
      this.sc.snakeDirection === 1 &&
      this.sc.snakePosition.x === this.sc.worldWidth
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakeDirection === 3 &&
      this.sc.snakePosition.x < this.sc.worldWidth / 2 &&
      this.sc.snakePosition.y === 0
    ) {
      this.sc.turnSnakeRight();
    } else if (this.sc.snakeDirection === 3 && this.sc.snakePosition.y === 0) {
      this.sc.turnSnakeLeft();
    }
  }
}

export default AvoidWallPlayer;
