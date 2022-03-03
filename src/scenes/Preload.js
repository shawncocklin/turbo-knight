import Phaser from 'phaser'

import player from '../../assets/BlockKnight.png'
import bg from '../../assets/background01.png'


export default class Preload extends Phaser.Scene {
  constructor(config) {
    super('Preload', config)
  }

  preload() {
    this.load.image('player', player)
    this.load.image('background', bg)
  }

  create() {
    this.scene.start('GameScene')
  }
}