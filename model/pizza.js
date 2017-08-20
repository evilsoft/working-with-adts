const Arrow = require('crocks/Arrow')
const branch = require('crocks/Pair/branch')
const compose = require('crocks/helpers/compose')
const composeS = require('crocks/helpers/composeS')
const concat = require('crocks/pointfree/concat')
const map = require('crocks/pointfree/map')
const merge = require('crocks/Pair/merge')
const objOf = require('crocks/helpers/objOf')
const option = require('crocks/pointfree/option')
const prop = require('crocks/Maybe/prop')

// dough : Arrow [ String ]
const dough =
  Arrow(concat([ 'dough' ]))

// sauce : Arrow [ String ]
const sauce =
  Arrow(concat([ 'sauce' ]))

// cheese : Arrow [ String ]
const cheese =
  Arrow(concat([ 'cheese' ]))

// cheesePizza : Arrow [ String ]
const cheesePizza = composeS(
  cheese, sauce, dough
)

// cookPizza : a -> {}
const cookPizza = def => compose(
  map(objOf('cooked')),
  prop('raw')
)(def)

// package : a -> [ a ]
const package =
  x => [ x ]

// oven : Arrow a {}
const oven =
  Arrow(cookPizza)
    .both()
    .contramap(branch)
    .map(merge(option))
