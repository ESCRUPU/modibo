// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010000010101000000000000000000000101000001010101010101010101010000010100010101010000000000000101000001000001010000010101000000010100000100010000010100010101000001010001000000010100000000010100000000010100000100000101000001010100000101000001000001010100000001010101010000000001010001010100000101010000010101010000000101000101010100000100000000010000000001010101000100000101010101010101010101000001000101010101010101010101010001010000010101010101010101010100010101000000000000000000000000000101`, img`
2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
. . . . . . . . . . 2 2 . . 2 2 
2 2 2 2 2 2 2 2 2 . . 2 2 . 2 2 
2 2 . . . . . . 2 2 . . 2 . . 2 
2 . . 2 2 2 . . . 2 2 . . 2 . 2 
. . 2 2 . 2 2 2 . . 2 2 . 2 . . 
. 2 2 . . . . 2 2 . . . . 2 2 . 
. 2 . . 2 2 . . 2 2 2 . . 2 2 . 
. 2 . . 2 2 2 . . . 2 2 2 2 2 . 
. . . 2 2 . 2 2 2 . . 2 2 2 . . 
2 2 2 2 . . . 2 2 . 2 2 2 2 . . 
2 . . . . 2 . . . . 2 2 2 2 . 2 
. . 2 2 2 2 2 2 2 2 2 2 2 . . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
. . 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 . . . . . . . . . . . . . 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
