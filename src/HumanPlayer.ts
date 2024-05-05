import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";
import Player from "./Player";

class HumanPlayer extends Player {
  private inputHandler: IInputHandler;

  constructor(snakeController: SnakeController, inputHandler: IInputHandler) {
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
