const { modify, get } = require('crocks/State')

// add : Int -> Int -> Int
const add =
  x => y => x + y

// canVend : Int -> Bool
const canVend =
  n => n >= 100

// State s a
// (s -> (a, s))

// addNickel : () -> State Int ()
const addNickel =
  () => modify(add(5))

// addDime : () -> State Int ()
const addDime =
  () => modify(add(10))

// addQuarter : () -> State Int ()
const addQuarter =
  () => modify(add(25))

// addLooney : () -> State Int ()
const addLooney =
  () => modify(add(100))

// evaluate : () -> State Int Bool
const evaluate =
  () => get(canVend)
