// index.js
import './styles/index.css';
import './styles/reset.css'
import Game from './classes/game'
import Sound from './classes/sound'

import youngChris from './assests/characters/chris.png'
import office1 from './assests/backgrounds/Office_Design_1.png'
import gabby from './assests/music/Gabby.mp3'
import { scale } from './utils/utils'
// ==================================
// preload images
// ==================================
const images = []

function preload(...urls) {
  for (let i = 0; i < urls.length; i++) {
    images[i] = new Image()
    images[i].src = urls[i]
  }
}

preload(
  youngChris,
  office1
)

//==============================
// main logic
//==============================
document.addEventListener("DOMContentLoaded", () => {
  const music = new Sound(gabby)
  // player
  const canvas = document.getElementById('player')
  canvas.width = 480
  canvas.height = 320
  const ctx = canvas.getContext('2d')

  // background
  const background = document.getElementById('background-layer')

  const ctxBG = background.getContext('2d')
  scale(canvas)
  
  const game = new Game(ctx, ctxBG)
  images[1].onload = () => {
    Game.drawBackground(background, ctxBG, images[1])
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      const dialogue = document.getElementById('dialogue')
      dialogue.classList.add('hide')
      background.classList.remove('hide')
      game.togglePause()
      game.start()
      music.play()
    }
  })
  
  
});