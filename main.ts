namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
let myfood: Sprite = null
let myDecor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`ocean1`)
scene.setBackgroundColor(8)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(15)
for (let index = 0; index < 10; index++) {
    myDecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    myDecor.setPosition(randint(0, 160), 96)
}
game.onUpdateInterval(2100, function () {
    myfood = sprites.create(assets.image`food`, SpriteKind.Food)
    myfood.setPosition(scene.screenWidth(), randint(5, 115))
    myfood.vx = -75
})
