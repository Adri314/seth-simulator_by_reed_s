info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(8, 152), randint(8, 112))
    info.changeScoreBy(1)
    music.bigCrash.play()
    mySprite.startEffect(effects.fire, 500)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.splash("seth simulator", "made by thatsneakyboi")
scene.setBackgroundColor(9)
info.startCountdown(60)
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . e e e d d d d d d e e e . . 
    . . e e d d d d d d d d e e . . 
    . . e d d d d d d d d d d e . . 
    . . e d d d d d d d d d d e . . 
    . . e d d d d d d d d d d e . . 
    . . e d d d d d d d d d d e . . 
    . . e d d d d d d d d d d e . . 
    . . e d d d d d d d d d d e . . 
    . . e d d d d d d d d d d e . . 
    . . e e e e e e e e e e e e . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(randint(8, 152), randint(8, 112))
