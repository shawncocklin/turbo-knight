
export default anims => {
  // run animation
  anims.create({
    key: 'run',
    frames: anims.generateFrameNumbers('player', {start: 0, end: 3}),
    frameRate: 6,
    repeat: -1
  })

  // idle animation
  anims.create({
    key: 'idle',
    frames: anims.generateFrameNumbers('player', {start: 0, end: 0}),
    frameRate: 6,
    repeat: -1
  })

  // fly animations
  anims.create({
    key: 'fly',
    frames: anims.generateFrameNumbers('player', {start: 4, end: 6}),
    frameRate: 10,
    repeat: -1
  })
}