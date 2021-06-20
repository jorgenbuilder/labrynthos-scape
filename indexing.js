const L = require('./out');
const O = require('./o');

// We need each card to have it's unique index...

for (card of L) {
    const oCard = O.find(x => x.name == card.name);
    card.index = oCard.index;
}

console.log(L);