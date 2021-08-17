// index.js
import './styles/index.css';
import './styles/reset.css'

import Game from './classes/game'
import { playList } from './utils/utils';

import youngChris from './assests/characters/chris.png'
import office1 from './assests/backgrounds/Office_Design_1.png'
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
  const canvas = document.getElementById('player')
  const ctx = canvas.getContext('2d')

  // background
  const background = document.getElementById('backgroundLayer')
  const ctxBG = background.getContext('2d')
  scale(canvas)
  const game = new Game(ctx, ctxBG)

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      const dialogue = document.getElementById('dialogue')
      dialogue.classList.add('hide')
      background.classList.remove('hide')
      game.togglePause()
      game.start()
      playList()
    }
  })
  
  
});