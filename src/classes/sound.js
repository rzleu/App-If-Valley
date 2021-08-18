// sounds.js
class Sound {
  constructor(src) {
    this.sound = new Audio(src)
    this.sound.volume = 0.1
  }

  play() {
    this.sound.play()
  }

  pause() {
    this.sound.pause()
  }

  incVolume() {
    this.sound.volume += .5
  }

  decVolume() {
    this.sound.volume -= .5
  }

  getSound() {
    return this.sound
  }

  setVolume(vol) {
    this.sound.volume = vol
  }
}

export default Sound