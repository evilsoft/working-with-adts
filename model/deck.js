const Pair = require('crocks/Pair')

const assign = require('crocks/helpers/assign')
const chain = require('crocks/pointfree/chain')
const liftA2 = require('crocks/helpers/liftA2')
const map = require('crocks/pointfree/map')
const reduce = require('crocks/pointfree/reduce')

const suits = [
  { suit: '♠', color: 'dark' },
  { suit: '♣', color: 'dark' },
  { suit: '♥', color: 'light' },
  { suit: '♦', color: 'light' },
]

const values = [
  { value: 1, face: 'A' },
  { value: 2, face: '2' },
  { value: 3, face: '3' },
  { value: 4, face: '4' },
  { value: 5, face: '5' },
  { value: 6, face: '6' },
  { value: 7, face: '7' },
  { value: 8, face: '8' },
  { value: 9, face: '9' },
  { value: 10, face: '10' },
  { value: 11, face: 'J' },
  { value: 12, face: 'Q' },
  { value: 13, face: 'K' },
]

// deck : [ Card ]
const deck =
  liftA2(assign, suits, values)

// displayCard : Card -> String
const displayCard =
  ({ face, suit }) => face + suit

// displayCards : [ Card ] -> [ String ]
const displayCards =
  map(displayCard)

// pickCard : [ Card ] -> Pair [ Card ] [ Card ]
const pickCard = cs => {
  const indx = Math.floor(Math.random() * cs.length)

  return Pair(
    [].concat(cs[indx]),
    cs.slice(0, indx).concat(cs.slice(indx + 1))
  )
}

// shuffleCards : [ Card ] -> [ Card ]
const shuffleCards = cards =>
  reduce(chain(pickCard), Pair([], cards), cards).fst()

module.exports = {
  deck,
  displayCard,
  displayCards,
  pickCard,
  shuffleCards
}
