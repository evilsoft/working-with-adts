const log = require('./lib/log')

const {
  deck,
  displayCards,
  shuffleCards
} = require('./model/deck')

log(
  displayCards(shuffleCards(deck))
)
