import C from './constants'
import { allSkiDays, goal } from './initialState.json'

console.log(`
  sky day counter 
  ======================
  the goal is ${ goal } days 
  initially there are ${ allSkiDays.length } sky days in state

  Constants (actions)
  -------------------
  ${Object.keys(C).join('\n         ')}
}


`)