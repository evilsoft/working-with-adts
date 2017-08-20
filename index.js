const log = require('./lib/log')

const { pullRandom } = require('./model/randoArrow')

log(
  pullRandom()
    .chain(pullRandom)
    .chain(pullRandom)
    .execWith({ seed: 23 })
)
