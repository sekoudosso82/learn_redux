import {goal} from '../store/reducer'
import C from './constants'

const state = 10

const action = {
  type: C.SET_GOAL,
  payload: 15
}

const nextState = goal(state, action)

console.log(`
  initial  goal: ${state}
  action: ${JSON.stringify(action)}
  new  goal: ${nextState}
`)