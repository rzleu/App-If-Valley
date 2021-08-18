import Protagonist from './player'
import Map from './map1'
import { scale } from '../utils/utils'
class Game {
  constructor() {
    this.map = new Map()
    
    // animations
    this.fpsInterval = "";
    this.then = "";
    this.startTime = "";
    this.now = "";
    this.then = "";
    this.elapsed = "";

    // pause game
    this.isPaused = true

    // player canvas & context
    this.canvas = document.getElementById('player')
    this.ctx = this.canvas.getContext('2d')

    console.log(this.dimensions);
    
    // console.log(this.dimensions);
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

  play() {
    scale(this.canvas)
    console.log(this.map.getDimensions());
    this._setDimensions()
    this._setPlayer()
    this.map.draw()
    
    this.startAnimate(15)
  }

  _setDimensions() {
    this.dimensions = this.map.getDimensions()
    // console.log(width);
    this.canvas.width = this.dimensions.width
    this.canvas.height = this.dimensions.height
    
  }

  _setPlayer(){
    this.character = new Protagonist(this.ctx, this.map.getDimensions(), Map.getCollisionMap())
  }
}

export default Game;