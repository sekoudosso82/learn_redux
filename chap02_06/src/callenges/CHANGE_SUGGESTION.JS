import C from '../constants'
import expect from 'expect'
import {suggestions, fectching} from "../store/reducer"

const action = {  
    type: C.CHANGE_SUGGESTIONS,
    payload: ['Heavenly Ski Resort', 'Heavenly Sonohara']
}

const  state = {
    fetching: true,
    suggestions:['Heavenly Ski Resort', 'Heavenly Sonohara']
}
const expectedState = {
    fetching: false,
    suggestions:['Heavenly Ski Resort', 'Heavenly Sonohara']
}
const actualState = {
    fetching: fetching(state.fetching, action),
    suggestions:suggestions(state.suggestions, action)
}
expect(actualState.suggestions).toEqual(expectedState.suggestions)
expect(actualState.fetching).toEqual(expectedState.fetching)


console.log(`
challenge B: CHANGE_SUGGESTIONS PASSED!!!
`)