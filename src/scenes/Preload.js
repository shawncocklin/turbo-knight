import Phaser from 'phaser'

import player from '../../assets/TurboKnightSheet.png'
import bg from '../../assets/background01.png'


export default class Preload extends Phaser.Scene {
  constructor(config) {
    super('Preload', config)
  }

  preload() {
    this.load.spritesheet('player', player, {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.image('background', bg)
  }

  create() {
    this.scene.start('GameScene')
  }
}