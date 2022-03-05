
export default anims => {
  // run animation
  anims.create({
    key: 'run',
    frames: anims.generateFrameNumbers('player', {start: 0, end: 3}),
    frameRate: 10,
    repeat: -1
  })

  // idle animation
  anims.create({
    key: 'idle',
    frames: anims.generateFrameNumbers('player', {start: 0, end: 0}),
    frameRate: 10,
    repeat: -1
  })

  // // jump animation
  // anims.create({
  //   key: 'jump',
  //   frames: anims.generateFrameNumbers('player', {start: 18, end: 23}),
  //   frameRate: 2,
  //   repeat: -1
  // })
}