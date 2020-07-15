import C from '../constants'
import expect from 'expect'
import {fetching} from "../store/reducer"

const action = {  
    type: C.FETCH_RESORT_NAMES
}

const  state = false
const expectedState = true
const actualState = fetching(state , action)

expect(actualState).toEqual(expectedState)

console.log(`
challenge A: FETCH_RESORT_NAMES PASSED!!!
`)