import Protagonist from './player'
import Map1 from './map1'

class Game {
  constructor(ctx) {
    // context
    this.ctx = ctx
    // main character
    this.character = new Protagonist(this.ctx)

    // animations
    this.fpsInterval = "";
    this.then = "";
    this.startTime = "";
    this.now = "";
    this.then = "";
    this.elapsed = "";

    // canvas dimensions
    this.dimensions = {
      width: 400,
      height: 240
    };
    this.x = this.dimensions.width;
    this.y = this.dimensions.height;

    // pause game
    this.isPaused = true
  }

  startAnimate(fps) {
    this.fpsInterval = 1000 / fps
    this.then = Date.now()
    this.startTime = this.then
    this.animate()
  }

  animate() {
    if (this.isPaused) return

    requestAnimationFrame(() => this.animate());
    this.now = Date.now();
    this.elapsed = this.now - this.then;

    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);
      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
      this.character.animate();
    }
  }


  togglePause() {
    this.isPaused = !this.isPaused
  }

  start() {
    this.map = new Map1()
    this.map.draw()
    this.startAnimate(15)
  }

}

export default Game;