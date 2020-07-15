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