// map1.js

import office1 from '../assests/backgrounds/Office_Design_1.png'

class Map1 {
  constructor(player) {
    this.setContext()
    this.collideMap = this.collisionMap()
    this.image = new Image()
    this.image.src = office1
    this.canvas.width = this.image.naturalWidth
    this.canvas.height = this.image.naturalHeight
  }

  setContext() {
    this.canvas = document.getElementById('backgroundLayer')
    this.ctx = this.canvas.getContext('2d')
  }

  collisionMap() {
    return [
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
      [4,4,4,4,4,3,2,1,1,1,1,1,4,4,4,4,4],
      [4,4,4,2,2,2,2,0,0,0,0,4,4,4,4,4,4],
      [4,4,4,2,0,0,0,0,4,4,4,4,4,4,4,4,4],
      [4,4,4,4,2,4,4,3,4,4,4,4,4,4,4,4,4],
      [4,4,4,4,2,4,4,4,4,4,4,4,4,4,4,4,4],
      [2,2,1,1,0,2,4,4,4,4,4,4,4,4,4,4,4],
      [1,0,0,0,0,1,4,4,4,4,4,4,4,4,4,4,4],
      [1,0,0,0,0,0,2,2,2,2,2,2,4,4,4,4,4],
      [2,1,1,1,1,1,4,4,4,4,4,3,4,4,4,4,4],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    ]
  }

  draw(){
    this.image.onload = (e) => {
      this.ctx.drawImage(this.image, 0, 0)
    }
  }
}

export default Map1