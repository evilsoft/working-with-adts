const log = require('./lib/log')

const State = require('crocks/State')
const B = require('crocks/combinators/composeB')
const K = require('crocks/combinators/constant')

const assign = require('crocks/helpers/assign')
const prop = require('crocks/Maybe/prop')
const option = require('crocks/pointfree/option')

const { modify, get } = State

// pluckSeed : Integer -> Object -> Integer
const pluckSeed =
  def => B(option(def), prop('seed'))

// rando : Integer -> State Object Float
const rando = x => {
  const seed = (1103515245 * x + 12345) & 0x7fffffff
  const value = (seed >>> 16) / 0x7fff

  return modify(assign({ seed }))
    .map(K(value))
}

// pullRandom : Integer -> State Object Float
const pullRandom =
  defSeed => get(pluckSeed(defSeed)).chain(rando)

// limitIndx : Integer -> Float -> Integer
const limitIndx =
  len => x => (x * len) | 0

const seed = 76

log(
  State.of(seed)
    .chain(pullRandom)
    .map(limitIndx(52))
    .runWith({ deck: false })
)
