import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }
  public display(model: WorldModel): void {
    this.worldCanvas.width = model.WorldWidth * this.scalingFactor;
    this.worldCanvas.height = model.WorldHeight * this.scalingFactor;

    this.context.clearRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
    this.context.fillStyle = "black";

    this.context.fillRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );

    model.snake.forEach((snake) => {
      // Iterate over all parts of the snake
      snake.parts.forEach((part) => {
        // Calculate the position of the part on the canvas
        const x = part.x * this.scalingFactor;
        const y = part.y * this.scalingFactor;

        // Draw the part of the snake
        this.context.fillStyle = snake.color; // Assuming each snake has a color property
        this.context.fillRect(x, y, this.scalingFactor, this.scalingFactor);
      });
    });
  }
}

export default CanvasWorldView;
