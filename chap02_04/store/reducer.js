import C from '../src/constants'
export  const goal = (state, action) => {
    action.payload  ===  C.SET_GOAL ?
        parseInt(action.payload) :
        state 
}

export const skiDay = (state, action) => {
    action.payload  ===  C.ADD_DAY ?
        action.payload :
        state
} 

export const erros = (state=[], action) => {
    switch(action.type) {
        case C.ADD_ERROR :
            return [ ...state, action.payload]
        case C.CLEAR_ERROR:
            return state.filter((massage, i) => i !== action.payload)
        default :
            return state
    }
}