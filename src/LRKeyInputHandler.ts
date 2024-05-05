import IInputHandler from "./IInputHandler";

class LRKeyInputHandler implements IInputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;

  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      this.wasLeftArrowPushed = true;
    } else if (event.key === "ArrowRight") {
      this.wasRightArrowPushed = true;
    }
  }

  public madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;
  }

  public madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }

  public resetLeftMove(): void {
    this.wasLeftArrowPushed = false;
  }

  public resetRightMove(): void {
    this.wasRightArrowPushed = false;
  }
}

export default LRKeyInputHandler;
