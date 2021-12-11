import * as alt from 'alt';
let tows = []

alt.onClient('flat:flatbed:removetow', (player, thistow) => {
    let temptows = []
    tows.forEach(tow => {
        if (tow.flatbed != thistow.flatbed) {
            temptows.push(tow)
        }
    });
    tows = temptows
});

alt.onClient('flat:flatbed:addtow', (player, thisflatbed, thistowed) => {
    tows.push({ flatbed : thisflatbed, towed : thistowed })
});

alt.onClient('flat:flatbed:gettowedvehicleslist', (player) => {
    alt.emitClient(player, 'flat:flatbed:sendtowedvehicleslist', tows);
});

alt.onClient('flat:flatbed:getvehicleslist', (player) => {
    let list = alt.Vehicle.all;
    alt.emitClient(player, 'flat:flatbed:sendvehicleslist', list);
});