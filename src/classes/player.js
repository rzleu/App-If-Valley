// player.js

import youngChris from '../assests/characters/chris.png'

class Player {
  constructor(ctx, dimensions, collisionMap) {
    this.dimensions = dimensions
    this.collisionMap = collisionMap
    this.ctx = ctx
    // console.log(dimensions);
    // pos
    this.x = 0
    this.y = 130

    // sprite
    this.width = 16
    this.height = 32
    this.frameX = 3
    this.frameY = 0
    this.image = new Image()
    this.image.src = youngChris
    this.keypress = {}
    this.SPEED = 9
    this.moving = false
    this._registerEvents()
  }


  // * binds event listeners
  _registerEvents() {
    window.addEventListener("keydown", e => {
      this.keypress[e.code] = true;
      this.moving = true;
    })
    window.addEventListener("keyup", e => {
      delete this.keypress[e.code];
      this.moving = false;
      this.frameX = 1
    })
  }

  _drawSprite(img, sX, sY, sW,sH,dX,dY,dW,dH) {
    this.ctx.drawImage(img, sX, sY, sW,sH,dX,dY,dW,dH)
  }

  _getCollisionPosition(){
    // console.log({
    //   x: this.x,
    //   y: this.y
    // });
    const currX = Math.floor(this.x / 15)
    const currY = Math.floor(this.y / 14.25)
    // console.log({currX});
    // console.log({currY});

    return [currX,currY]
  }

  // * main function to move young chris
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
    this.movePlayer()
    this.playerFrame()    
  }

  // * moves x-u position
  movePlayer() {
    const [x,y] = this._getCollisionPosition()

    if (this.keypress['KeyW'] && this.y > this.SPEED && this.collisionMap[y - 1][x] === 0) {
      if (this.frameX < 6 || this.frameX > 10) {
        this.frameX = 6
        this.frameY = 2
      }
      this.y -= this.SPEED
      this.moving = true
    }
    if (this.keypress['KeyA'] && this.x > 0 && this.collisionMap[y][x - 1] === 0) {
      if (this.frameX < 12 || this.frameX > 17) {
        this.frameX = 12
        this.frameY = 2
      }
      this.x -= this.SPEED
      this.moving = true
    }
    if (this.keypress['KeyD'] && (this.x < this.dimensions.width - this.width * 1.75) && this.collisionMap[y][x + 1] === 0) {
      if (this.frameX > 5) {
        this.frameX = 0
        this.frameY = 2
      }
      this.x += this.SPEED
      this.moving = true
    }
    if (this.keypress['KeyS'] && (this.y < this.dimensions.height - Math.floor(this.height * 1.5)) && this.collisionMap[y + 1][x] === 0) {
      if (this.frameX < 18 || this.frameX >= 23) {
        this.frameX = 18
        this.frameY = 2
      }
      this.y += this.SPEED
      this.moving = true
    }
  }

  // * dont ask about random numbers. it just works
  // * frame animations
  playerFrame() {
    // console.log(this.moving);
    console.log(this.frameX);
    console.log(this.frameY);
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
    if (this.frameX > 22) {
      this.frameX = 0
    }
    this.frameX++ // TODO: this bugs out when holding not dir keys and running into walls
  }
  
}

export default Player