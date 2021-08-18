// map1.js

import office1 from '../assests/backgrounds/Office_Design_1.png'

class Map1 {
  constructor(player) {
    this.canvas = document.getElementById('backgroundLayer')
    this.ctx = this.canvas.getContext('2d')
    this.collideMap = this.constructor.getCollisionMap()
    this.image = new Image()
    this.image.src = office1
    this.draw()
  }

  static getCollisionMap() {
    // last element in array is 7x16
    return [ //! 9x12
      // [1,1,1,1,1,1,1,1,1,1,1,1],
      // [1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,0,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,0,0,0,0,0],
      [1,1,1,0,0,0,0,0,0,0,0,0],
      [1,1,1,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,1,1,1,1,1,1,1],
      [1,1,1,1,0,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,1,1,1,1,1,1],
      [0,0,0,0,0,0,1,1,1,1,1,1],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,1,1,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0]// bottom row is 5x16
    ]
  }

  draw() {
    this.image.onload = () => {
      this.canvas.width = this.image.naturalWidth
      this.canvas.height = this.image.naturalHeight
      this.ctx.drawImage(this.image, 0, 0)
    }
  }

  getDimensions(){
    return {
      width: this.image.naturalWidth,
      height: this.image.naturalHeight
    }
  }
}

export default Map1