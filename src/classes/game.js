import Protagonist from './player'


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
      width: 480,
      height: 320
    };
    this.x = this.dimensions.width;
    this.y = this.dimensions.height;

    // pause game
    this.isPaused = true
  }

  static drawBackground(canvas, ctx,bg){
    canvas.width = bg.naturalWidth;
    canvas.height = bg.naturalHeight;
    ctx.drawImage(bg,0,0)
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
    this.startAnimate(15)
  }

}

export default Game;