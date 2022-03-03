import Phaser from 'phaser'
import Preload from './scenes/Preload'
import GameScene from './scenes/GameScene'


const useDebugger = false

const WIDTH = 1600 // 50 tiles wide
const HEIGHT = document.body.offsetHeight

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
}

const Scenes = [Preload, GameScene]

const initScenes = () => Scenes.map(Scene => new Scene(SHARED_CONFIG))

const config = {
  ...SHARED_CONFIG,
  pixelArt: true,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: {y: 400},
      debug: useDebugger
    }
  },
  scene: initScenes()
}


const game = new Phaser.Game(config)