import Phaser from 'phaser'
import anims from './PlayerAnimations'


export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player')

    // allows access to the Scene's update loop
    scene.add.existing(this)
    scene.physics.add.existing(this)

    // how fast the player falls
    this.playerGravity = 1000 
    // how fast the player moves horizontally
    this.speedX = 200
    // how fast the player ascends against the gravity
    this.speedY = -500

    // flag to track if player still has sword. If player is hit without the sword, they will die and lose a life
    this.hasSword = true
    // flag to check if player has shield powerup. grants player an extra hit before losing sword. defaults to false
    // TODO: the correct starting sprite with be the one without the shield, still needs imported
    this.hasShield = false

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
      .setOrigin(0.5,1)
    anims(this.scene.anims)
  }

  initEvents() {
    // attaches the Scene update function to this class
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
  }

  update() {
    this.playerMove()
    this.playerFly()
  }

  playerMove() {
    const {left, right} = this.playerInput
    const onFloor = this.body.onFloor()
    if(left.isDown) {
      this.flipX = true
      this.setVelocityX(-this.speedX)
      if(onFloor) {
        this.play('run', true)
      }
    }
    else if(right.isDown) {
      this.flipX = false
      this.setVelocityX(this.speedX)
      if(onFloor) {
        this.play('run', true)
      }
    }
    else {
      this.setVelocityX(0)
      if(onFloor) {
        this.play('idle', true)
      }
    }
  }

  playerFly() {
    const {space} = this.playerInput
    const spaceDown = Phaser.Input.Keyboard.JustDown(space)
    if(spaceDown) {
      this.stop('idle').play('fly', true)
      this.setVelocityY(this.speedY)
    }
  }
}