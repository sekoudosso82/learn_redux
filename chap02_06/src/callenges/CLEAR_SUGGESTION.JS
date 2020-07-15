import C from '../constants'
import expect from 'expect'
import {suggestions} from "../store/reducer"

const action = {  
    type: C.CLEAR_SUGGESTIONS
}

const  state = ['Heavenly Ski Resort', 'Heavenly Sonohara']
const expectedState = []
const actualState = suggestions(state , action)

expect(actualState).toEqual(expectedState)

console.log(`
challenge B: CLEAR_SUGGESTIONS PASSED!!!
`)