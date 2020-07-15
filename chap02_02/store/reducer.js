import C from '../src/constants'
export  const goal = (state, action) => {
    if (action.payload  ===  C.SET_GOAL){
        return parseInt(action.payload)
    }else {
        return state 
    }
}