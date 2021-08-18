// utils.js
import Sound from "../classes/sound";
import gabby from '../assests/music/Gabby.mp3'
import doYou from '../assests/music/Do_You.mp3'
import word from '../assests/music/WORD.mp3'
import kh3 from '../assests/music/KH3.mp3'

export function isCollide(a, b) {
  return !(
    ((a.y + a.height) < (b.y)) ||
    (a.y > (b.y + b.height)) ||
    ((a.x + a.width) < b.x) ||
    (a.x > (b.x + b.width))
  );
}

export function scale(canvas) {
  const scaleX = window.innerWidth / canvas.width
  const scaleY = window.innerHeight / canvas.height
  const scaleToFit = Math.min(scaleX, scaleY) - 1.5
  stage.style.transformOrigin = 'center' //scale from top left
  stage.style.transform = 'scale(' + scaleToFit + ')'
  // backgroundLayer.style.transform = 'scale(' + scaleToFit + ')'
}

export function playList() {
  const gabbySong = new Sound(gabby)
  const wordSong = new Sound(word)
  wordSong.setVolume(.25)

  const doYouSong = new Sound(doYou)
  doYouSong.setVolume(.35)

  const evanSong = new Sound(kh3)

  const playListSongs = [gabbySong, doYouSong, wordSong, evanSong]

  const firstSong = playListSongs.shift()
  firstSong.play()
  firstSong.getSound().addEventListener('ended', () => {
    const next = playListSongs.shift()
    playListSongs.push(next)
    next.play()
  })
}
