export const CHECK_STRENGTH = "CHECK_STRENGTH"
export const SET_TEXT ="SET_TEXT"
export const CLEAR = "CLEAR"

export const initialState = {
    passwordText : "",
    strength : null,
    generatedPassword : null
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TEXT:

            return {...state, 
                passwordText : action.payload
                }
                
        case CLEAR:
            return initialState
            
        default:
            return {...state}
    }
}

export default mainReducer