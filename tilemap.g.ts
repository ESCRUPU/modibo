// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006060606060606060606010b020c0a0103000000000000000000070b00000a01050404040404040408000007080007010a09000000000000070800000700000a09000005040800000007080000050007000005090007040800000708000a0000000509000000000708000000000a0800000a00000508000007040800000a0b00000700000a060800000007040401090000000005090007040800000a010b0000040404090000000709000501010b0000090000000008000000000a01010100050000050404010404040401010b00000a0005010101010101010101010b00050100000706060606060606060609000a0108000000000000000000000000000a01`, img`
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
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
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairLarge,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.purpleSwitchUp], TileScale.Sixteen);
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
