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

export const allSkiDays = (state=[], action) => {
    switch(action.type) {
        case C.ADD_DAY :
            const hasDay = state.some(skyDay  => skyDay.date === action.playload.date)
        
            return (hasDay) ?
            state:
            [ ...state, skyDay(null, action)]
        case C.REMOVE_DAY:
        default :
            return state
    }
}

export const fetching = (state=false, action) => {
    switch(action.type) {
        case C.FETCH_RESORT_NAMES :
            return true
        case C.CANCEL_FETCHING :
            return false
        case C.CHANGE_SUGGESTIONS :
            return false
        default :
            return state
    }
}
export const suggestions = (state=[], action) => {
    switch(action.type) {
        case C.CLEAR_SUGGESTIONS :
            return []
        case C.CHANGE_SUGGESTIONS :
            return action.payload
        default :
            return state
    }
}

