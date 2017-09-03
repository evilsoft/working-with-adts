const log = require('./lib/log')
const { pullRandom } = require('./model/rando')

// initialState : GameState
const initialState = {
  deck: [],
  seed: Date.now()
}

log(
  pullRandom()
    .chain(pullRandom)
    .chain(pullRandom)
    .chain(pullRandom)
    .evalWith(initialState)
)
