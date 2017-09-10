const { get, modify } = require('crocks/State')

const B = require('crocks/helpers/compose')
const assign = require('crocks/helpers/assign')
const objOf = require('crocks/helpers/objOf')
const option = require('crocks/pointfree/option')
const prop = require('crocks/Maybe/prop')

// getKey : (Str, a) -> () -> State s a
const getKey = (key, def) =>
  () => get(B(option(def), prop(key)))

// putKey : Str -> a -> State s ()
const putKey = key =>
  B(modify, assign, objOf(key))

module.exports = {
  getKey, putKey
}
