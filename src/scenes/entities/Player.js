import Phaser from 'phaser'


export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player')

    // allows access to the Scene's update loop
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.playerGravity = 1000
    this.speedX = 200
    this.speedY = -500

    // creates hotkeys for up, down, left, right, shift, and space
    this.playerInput = this.scene.input.keyboard.createCursorKeys()

    this.init()
    this.initEvents()

  }

  init() {
    this.body.setGravityY(this.playerGravity)
    this
      .setCollideWorldBounds(true)
      .setScale(3)
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
  }

  update() {
    this.playerMove()
    this.playerFly()
  }

  playerMove() {
    const {left, right} = this.playerInput
    if(left.isDown) {
      this.flipX = true
      this.setVelocityX(-this.speedX)
    }
    else if(right.isDown) {
      this.flipX = false
      this.setVelocityX(this.speedX)
    }
    else {
      this.setVelocityX(0)
    }
  }

  playerFly() {
    const {space} = this.playerInput
    const spaceDown = Phaser.Input.Keyboard.JustDown(space)
    if(spaceDown) {
      this.setVelocityY(this.speedY)
    }
  }
}