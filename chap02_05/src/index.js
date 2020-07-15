import C from './constants'
import {allSkiDays} from '../store/reducer'

const state = [
  {
    "resort": "Kirkwood",
    "date": "07-15-2020",
    "powder": true,
    "backcountry": false
}
]

const action = {
  type: C.ADD_DAY,
  payload: {
    "resort": "Boreal",
    "date": "07-15-2020",
    "powder": false,
    "backcountry": false
}
  
}

const nextState = errors(state, action)

console.log(`
  initial  state: ${JSON.stringify(state)}
  action: ${JSON.stringify(action)}
  new  state: ${JSON.stringify(nextState)}
`)