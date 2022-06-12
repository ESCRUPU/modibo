scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let kurby = sprites.create(assets.image`kurby`, SpriteKind.Player)
controller.moveSprite(kurby, 100, 100)
scene.setBackgroundImage(img`
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    `)
tiles.setCurrentTilemap(tilemap`level3`)
tiles.placeOnRandomTile(kurby, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(kurby)
info.startCountdown(20)
