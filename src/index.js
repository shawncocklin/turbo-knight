import Phaser from 'phaser'


const useDebugger = true

const WIDTH = 800
const HEIGHT = 600

const SHARED_CONFIG = {
  width: WIDTH,
  height: document.body.offsetHeight,
}

// const Scenes = [Preload, GameScene]

// const initScenes = () => Scenes.map(Scene => new Scene(SHARED_CONFIG))

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
  // scene: initScenes()
}


const game = new Phaser.Game(config)