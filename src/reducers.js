export const CHECK_STRENGTH = "CHECK_STRENGTH"
export const SET_TEXT ="SET_TEXT"
export const CLEAR = "CLEAR"
export const GENERATE_PASSWORD = "GENERATE_PASSWORD "

export const initialState = {
    passwordText : "",
    strength : null,
}

function generatePassword(){
  const password = [] //array of characters that will form the password
  const specialCharacters = ['+', '-', '/', '#', '@', '~', '.', ',', '%', '\'', '!', '$', '^', '\\', '?', ':', '(', ')', '{', '}', '[', ']','_']
  const insertCapitalLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }
  const insertSmallLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  const insertSpecialCharacter = () => {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }
  const insertDigit = () => {
    return Math.floor(Math.random() * 10)
  }
  const functions = [insertCapitalLetter, insertSmallLetter, insertSpecialCharacter, insertDigit]
  const passwordLength = Math.floor(Math.random() * 6 + 10)
  //Fill with one of each of the required character types
  password.push(insertCapitalLetter())
  password.push(insertSmallLetter())
  password.push(insertSpecialCharacter())
  password.push(insertDigit())

  //randomly fill out the rest of  the array
  for(let i = 3; i < passwordLength; i ++){
    let func = functions[Math.floor(Math.random() * functions.length)]
    password.push(func())
  }
  console.log("Returning password : " + password)
  return password.join("")
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
    if(/[+-/#@~.,%'!$^\\?:(){}[\]_]/.test(password) && password.length > 5){
      score += 1
      
    }

    //TEST 9
    if(password.length > 10 && score > 7){
        score += 1
        
    }

    //TEST 10
    if(password.length > 7 && /^(.*[+-/#@~.,%'!$^\\?:(){}[\]_]+.*){2,}$/.test(password)){
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
        case GENERATE_PASSWORD:
          const newState =  {
            ...state,
            passwordText : generatePassword(),
          }
          console.log("New state = " + JSON.stringify(newState))
          return newState

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