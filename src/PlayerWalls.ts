import Player from "./Player";
import SnakeController from "./SnakeController";
import Snake from "./Snake";

class PlayerWalls extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  makeTurn() {
    if (
      this.sc.snakeDirection === "down" &&
      this.sc.snakePosition.x === 0 &&
      this.sc.snakePosition.y < this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakeDirection === "down" &&
      this.sc.snakePosition.x === 0
    ) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakeDirection === "right" &&
      this.sc.snakePosition.x < this.sc.worldWidth / 2 &&
      this.sc.snakePosition.y === this.sc.worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakeDirection === "right" &&
      this.sc.snakePosition.y === this.sc.worldHeight
    ) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakeDirection === "up" &&
      this.sc.snakePosition.x === this.sc.worldWidth &&
      this.sc.snakePosition.y < this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    } else if (
      this.sc.snakeDirection === "up" &&
      this.sc.snakePosition.x === this.sc.worldWidth
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakeDirection === "left" &&
      this.sc.snakePosition.x < this.sc.worldWidth / 2 &&
      this.sc.snakePosition.y === 0
    ) {
      this.sc.turnSnakeRight();
    } else if (
      this.sc.snakeDirection === "left" &&
      this.sc.snakePosition.y === 0
    ) {
      this.sc.turnSnakeLeft();
    }
  }
}

export default PlayerWalls;
