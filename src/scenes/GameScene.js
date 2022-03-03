import Phaser from 'phaser'
import Player from '../entities/Player'


export default class GameScene extends Phaser.Scene {
  constructor(config) {
    super('GameScene',config)

    this.config = config
  }

  create() {
    this.createBackdrop()
    const player = this.createPlayer(this, this.config.width / 2, this.config.height / 2)
  }

  createBackdrop() {
    this.add.image(0,0, 'background')
      .setOrigin(0)
      .setScale(4)
  }

  createPlayer(scene, x, y) {
    return new Player(scene, x, y)
  }
} 