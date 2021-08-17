// sounds.js
class Sound {
  constructor(src) {
    this.sound = document.createElement("audio")
    this.sound.src = src
    this.sound.setAttribute("preload", "auto")
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none"
    this.sound.volume = 0.1

    document.body.appendChild(this.sound)
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