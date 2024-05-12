import Player from "./Player";
import WorldModel from "./WorldModel";

class GameController {
  private world: WorldModel;
  player1: Player | null;
  player2: Player | null;

  constructor(world: WorldModel) {
    this.world = world;
    this.player1 = null;
    this.player2 = null;
  }

  setPlayer1(player: Player) {
    this.player1 = player;
  }

  setPlayer2(player: Player) {
    this.player2 = player;
  }

  run() {
    let lastTime = 0;

    const updateFrame = () => {
      if (this.player1 && this.player2) {
        this.player1.makeTurn();
        this.player2.makeTurn();

        const currentTime = performance.now();
        const elapsedTime = currentTime - lastTime;

        if (elapsedTime > 250) {
          this.world.update(1);
          lastTime = currentTime - (elapsedTime % 250);
        }
      }

      requestAnimationFrame(updateFrame);
    };

    requestAnimationFrame(updateFrame);
  }
}
export default GameController;
