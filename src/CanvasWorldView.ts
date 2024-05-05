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
  display(worldModel: WorldModel): void {
    this.worldCanvas.width = worldModel.worldWidth * this.scalingFactor;
    this.worldCanvas.height = worldModel.worldHeight * this.scalingFactor;
    this.context.clearRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
    const snake = worldModel.theSnake;
    if (snake) {
      this.context.fillStyle = "green"; // Color of the snake
      // Draw a rectangle representing the snake
      this.context.fillRect(
        snake.position.x * this.scalingFactor,
        snake.position.y * this.scalingFactor,
        this.scalingFactor,
        this.scalingFactor,
      );
    }
  }
}

export default CanvasWorldView;
