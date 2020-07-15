import C from './constants'
import {skiDay} from '../store/reducer'

const state = null

const action = {
  type: C.ADD_DAY,
  payload: {
    "resort": "Heavenly",
    'date': '07-15-2020',
    'power': true,
    'backcountry': false
  }
}

const nextState = skiDay(state, action)

console.log(`
  initial  state: ${state}
  action: ${JSON.stringify(action)}
  new  state: ${JSON.stringify(nextState)}
`)