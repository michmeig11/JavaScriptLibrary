
let spaceJam = {
    toonSquad: {
        human: "Michael Jordan",
        rabbit1: "Bugs Bunny",
        rabbit2: "Lola Bunny",
        duck: "Daffy Duck",
        tDevil: "Tasmanian Devil",
        bird: "Tweety",
        cat: "Slyvester",
        pig: "Porky Pig"
    },
    monstars: {
        0: "Bupkus",
        1: "Bang",
        2: "Nawt",
        3: "Pound",
        4: "Blanko",
    },
    nbaPlayers: {
        phoenixSuns: "Charles Barkley",
        newJerseyNets: "Shawn Bradley",
        newYorkNets: "Patrick Ewing",
        charlotteHornets1: "Larry Johnson",
        charlotteHornets2: "Muggsy Bogues"
    },
}

console.log(Object.keys(spaceJam));
console.log(Object.keys(spaceJam.monstars));
console.log(spaceJam.monstars[0]);