import SnakeController from "./SnakeController";
import InputHandler from "./InputHandler";
import Player from "./Player";

class HumanPlayer extends Player {
  private inputHandler: InputHandler;

  constructor(snakeController: SnakeController, inputHandler: InputHandler) {
    super(snakeController);
    this.sc = snakeController;
    this.inputHandler = inputHandler;
  }

  public makeTurn(): void {
    if (this.inputHandler.madeLeftMove()) {
      this.sc.turnSnakeLeft();
      this.inputHandler.resetLeftMove();
    } else if (this.inputHandler.madeRightMove()) {
      this.sc.turnSnakeRight();
      this.inputHandler.resetRightMove();
    }
  }
}

export default HumanPlayer;
