export const CHECK_STRENGTH = "CHECK_STRENGTH"
export const SET_TEXT ="SET_TEXT"
export const CLEAR = "CLEAR"

export const initialState = {
    passwordText : "",
    strength : null,
    generatedPassword : null
}

function gradePassword(password){
    let score = 0
    //TEST 1
    if(password.length > 5){
      score += 1
      
    }
    //TEST 2
    if(password.length > 7){
      score += 1
      
    }

    //TEST 3
    if(/\w+/.test(password) && password.length > 5){
      score += 1
      
    }

    //TEST 4
    if(/\d+/.test(password) && password.length > 5){
      score += 1
      
    }

    //TEST 5
    if(/[A-Z]+/.test(password) && password.length > 5){
      score += 1
      
    }

    //TEST 6
    if(/(.*[A-Z]+.*){2,}/.test(password) && password.length > 7){
      score += 1
      
    }

    //TEST 7
    if(/(.*[a-z]+.*){2,}/.test(password) && password.length > 7){
      score += 1
      
    }

    //TEST 8
    if(/[+-.@:;/\\&^£$%]/.test(password) && password.length > 5){
      score += 1
      
    }

    //TEST 9
    if(password.length > 10 && score > 7){
        score += 1
        
    }

    //TEST 10
    if(password.length > 7 && /^(.*[+-.@:;/\\&^£$%]+.*){2,}$/.test(password)){
        score += 1
        
    }

    //TEST !!
    if(password.length > 12 && score > 7){
        score += 1
        
    }
    
    return score
  }

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case CHECK_STRENGTH:
            return {
                ...state,
                strength : gradePassword(state.passwordText)
            }
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