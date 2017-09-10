const log = require('./lib/log')

const bimap = require('crocks/pointfree/bimap')

const {
  pickRandom,
  deck,
  displayCard
} = require('./model/deck')

const initialState = {
  seed: 23,
  deck
}

const look = bimap(
  x => displayCard(x.option('')),
  xs => xs.length
)

const game =
  pickRandom()
    .chain(pickRandom)
    .chain(pickRandom)
    .chain(pickRandom)
    .chain(pickRandom)
    .execWith(initialState)

log(
  look(game.deck)
)
