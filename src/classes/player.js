// player.js

import youngChris from '../assests/characters/chris.png'

class Player {
  constructor(ctx, keys) {
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.width = 15
    this.height = 32
    this.frameX = 0
    this.frameY = 0
    this.image = new Image()
    this.image.src = youngChris
    this.keys = keys
    this.speed = 9
    this.moving = false

    this.animate()
  }


  move() {
    if (this.keys[38] && this.y > 100) {
      this.y -= this.speed
      this.frameY = 3
    }
  }

  _drawSprite(img, sX, sY, sW,sH,dX,dY,dW,dH) {
    this.ctx.drawImage(img, sX, sY, sW,sH,dX,dY,dW,dH)
  }

  animate() {
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
    this.move()
    requestAnimationFrame(() => this.animate())
  }
  
}

export default Player