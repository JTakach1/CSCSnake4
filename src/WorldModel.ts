import Snake from "./Snake";
class WorldModel {
  private leSnake: Snake;
  private width: number;
  private height: number;

  constructor(leSnake: Snake, width: number, height: number) {
    this.leSnake = leSnake;
    this.width = width;
    this.height = height;
  }

  update(steps: number) {
    this.leSnake.move(steps);
  }
  get theSnake() {
    return this.leSnake;
  }
  get worldWidth() {
    return this.width;
  }

  get worldHeight() {
    return this.height;
  }
}
export default WorldModel;
