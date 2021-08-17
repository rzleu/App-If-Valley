// player.js

import youngChris from '../assests/characters/chris.png'

class Player {
  constructor(ctx, map) {
    this.ctx = ctx

    // pos
    this.x = 200
    this.y = 200
    this.map = map

    // sprite
    this.width = 16
    this.height = 32
    this.frameX = 3
    this.frameY = 0
    this.image = new Image()
    this.image.src = youngChris
    this.keypress = {}
    this.speed = 9
    this.moving = false

    this._registerEvents()
  }


  // * binds event listeners
  _registerEvents() {
    window.addEventListener("keydown", e => this.keyDown(e))
    window.addEventListener("keyup", e => this.keyUp(e))
  }

  keyDown(e) {
    this.keypress[e.code] = true;
    this.moving = true;

  }

  keyUp(e) {
    delete this.keypress[e.code];
    this.moving = false;
  }


  _drawSprite(img, sX, sY, sW,sH,dX,dY,dW,dH) {
    this.ctx.drawImage(img, sX, sY, sW,sH,dX,dY,dW,dH)
  }

  // * main function to move young chris
  animate() {
    console.log({
      x: this.x,
      y: this.y
    })

    console.log(this.frameX)
    console.log(this.frameY);
    this._drawSprite(
      this.image, 
      this.width * this.frameX, 
      this.height * this.frameY,
      this.width, 
      this.height, 
      this.x,
      this.y, 
      this.width, 
      this.height
    )
    this.movePlayer()
    this.playerFrame()
    // requestAnimationFrame(() => this.animate())
  }

  // * moves x-u position
  movePlayer() {
    if (this.keypress['KeyW']) {
      if (this.frameX < 6 || this.frameX > 10) {
        this.frameX = 6
        this.frameY = 2
      }
      this.y -= this.speed
      this.moving = true
    }
    if (this.keypress['KeyA']) {
      if (this.frameX < 12 || this.frameX > 17) {
        this.frameX = 12
        this.frameY = 2
      }
      this.x -= this.speed
      this.moving = true
    }
    if (this.keypress['KeyD']) {
      if (this.frameX > 5) {
        this.frameX = 0
        this.frameY = 2
      }
      this.x += this.speed
      this.moving = true
    }
    if (this.keypress['KeyS']) {
      if (this.frameX < 18 || this.frameX >= 23) {
        this.frameX = 18
        this.frameY = 2
      }
      this.y += this.speed
      this.moving = true
    }
  }

  // * dont ask about random numbers. it just works
  // * frame animations
  playerFrame() {
    // console.log(this.frameX);
    if (!this.moving) {
      this.frameY = 1
      if (this.frameX === 5) {
        this.frameX = 0
      }
      else if (this.frameX === 11) {
        this.frameX = 6
      }
      else if (this.frameX === 17) {
        this.frameX = 12
      }
      else if (this.frameX >= 23){
        this.frameX = 18
      }
    }
    this.frameX++
  }
  
}

export default Player