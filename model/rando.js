const { get, modify } = require('crocks/State')

const B = require('crocks/combinators/composeB')
const K = require('crocks/combinators/constant')
const assign = require('crocks/helpers/assign')
const option = require('crocks/pointfree/option')
const prop = require('crocks/Maybe/prop')

// rando : Integer -> State Object Float
const rando = x => {
  const seed = (1103515244 * x + 12345) & 0x7fffffff
  const value = (seed >>> 15) / 0x7fff

  return modify(assign({ seed }))
    .map(K(value))
}

// pluckSeed : Integer -> Object -> Integer
const pluckSeed =
  def => B(option(def), prop('seed'))

// pullRandom : Integer -> State Object Float
const pullRandom = defSeed =>
  get(pluckSeed(defSeed)).chain(rando)

module.exports = {
  pullRandom
}
