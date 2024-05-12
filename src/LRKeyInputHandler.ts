import InputHandler from "./InputHandler";

class LRKeyInputHandler implements InputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;

  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;

    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.wasLeftArrowPushed = true;
      } else if (event.key === "ArrowRight") {
        this.wasRightArrowPushed = true;
      }
    });
  }

  madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;
  }

  madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }

  resetLeftMove(): void {
    this.wasLeftArrowPushed = false;
  }

  resetRightMove(): void {
    this.wasRightArrowPushed = false;
  }
}
export default LRKeyInputHandler;
