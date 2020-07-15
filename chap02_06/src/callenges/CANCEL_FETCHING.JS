import C from '../constants'
import expect from 'expect'
import {fetching} from "../store/reducer"

const action = {  
    type: C.CANCEL_FETCHING
}

const  state = false
const expectedState = true
const actualState = fetching(state , action)

expect(actualState).toEqual(expectedState)

console.log(`
challenge B: CANCEL_FETCHING PASSED!!!
`)