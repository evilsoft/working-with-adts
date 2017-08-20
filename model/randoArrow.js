const { get, modify } = require('crocks/State')

const Arrow = require('crocks/Arrow')

const B = require('crocks/combinators/composeB')
const K = require('crocks/combinators/constant')
const assign = require('crocks/helpers/assign')
const branch = require('crocks/Pair/branch')
const option = require('crocks/pointfree/option')
const prop = require('crocks/Maybe/prop')

// calcSeed : Arrow Integer
const calcSeed =
  Arrow(x => (1103515244 * x + 12345) & 0x7fffffff)

// value : Arrow (Pair Integer) Pair (Integer Float)
const value =
  Arrow(x => (x  >>> 15) / 0x7fff)
    .second()

// genRandom : Arrow Integer Object
const genRandom = calcSeed
  .map(branch)
  .compose(value)
  .map(p => [ p.fst(), p.snd() ])

// rando : Integer -> State Object Float
const rando = x => {
  const [ seed, value ] = genRandom.runWith(x)

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
