const { get, modify } = require('crocks/State')

const assign = require('crocks/helpers/assign')
const B = require('crocks/combinators/composeB')
const option = require('crocks/pointfree/option')
const prop = require('crocks/Maybe/prop')

// newSeed : Int -> Int
const newSeed =
  seed => (1103515244 * seed + 12345) & 0x7fffffff

// calcValue : Int -> Float
const calcValue =
  seed => (seed >>> 16) / 0x7fff

// pluckSeed : Int -> GameState -> Int
const pluckSeed =
  def => B(option(def), prop('seed'))

// getSeed : () -> State GameState Int
const getSeed =
  () => get(pluckSeed({ seed: 0 }))

// putSeed : Int -> State GameState ()
const putSeed =
  seed => modify(assign({ seed }))

// genSeed : () -> State GameState ()
const genSeed = () =>
  getSeed()
    .map(newSeed)
    .chain(putSeed)

// evaluate : () -> State GameState Float
const evaluate = () =>
  getSeed()
    .map(calcValue)

// pullRandom : () -> State GameState Float
const pullRandom = () =>
  genSeed()
    .chain(evaluate)

module.exports = {
  pullRandom
}
