import './App.css';
import Checker from './Components/Checker';
import {useReducer} from 'react'
import mainReducer, {initialState} from './reducers';



function App() {
  const[state, dispatch] = useReducer(mainReducer, initialState)
  const commonPasswords = [
    "password",
    "123456",
    "123456789",
    "12345678",
    "12345",
    "qwerty",
    "abc123",
    "football",
    "1234567",
    "monkey",
    "111111",
    "letmein",
    "1234",
    "1234567890",
    "dragon",
    "baseball",
    "sunshine",
    "iloveyou",
    "trustno1",
    "princess",
    "123123",
    "welcome",
    "login",
    "admin",
    "qwerty123",
    "solo",
    "1q2w3e4r",
    "master",
    "666666",
    "1qaz2wsx",
    "qwertyuiop",
    "ashley",
    "mustang",
    "121212",
    "starwars",
    "654321",
    "bailey",
    "access",
    "flower",
    "555555",
    "passw0rd",
    "shadow",
    "lovely",
    "7777777",
    "michael",
    "!@#$%^&amp;*",
    "jesus",
    "password1",
    "superman",
    "hello",
    "charlie",
    "888888",
    "696969",
    "hottie",
    "freedom",
    "aa123456",
    "qazwsx",
    "ninja",
    "azerty",
    "loveme",
    "whatever",
    "donald",
    "batman",
    "zaq1zaq1",
    "football",
    "000000",
    "123qwe"
]


  return (
    <div className="App" >
      {console.log("State = " + JSON.stringify(state))}
      <div className='clipboard'>
      <p>A good password :</p>
    <ul className='requirementList' >
      <li className='requirement'>
        <img alt="icon" className='icon' src={state.passwordText.length > 7 ?"https://cdn-icons-png.flaticon.com/128/5290/5290058.png" : "https://cdn-icons-png.flaticon.com/512/7698/7698976.png"}></img>
        <p className='description'>Should contain at least eight characters.</p>
      </li>
      <li className='requirement'>
        <img alt="icon" className='icon' src={/.*[A-Z]+.*/.test(state.passwordText) ? "https://cdn-icons-png.flaticon.com/128/5290/5290058.png" : "https://cdn-icons-png.flaticon.com/512/7698/7698976.png"}></img>
        <p className='description'>Should contain at least one capital letter.</p>
      </li>
      <li className='requirement'>
        <img alt="icon" className='icon' src={/.*[a-z]+.*/.test(state.passwordText) ? "https://cdn-icons-png.flaticon.com/128/5290/5290058.png" : "https://cdn-icons-png.flaticon.com/512/7698/7698976.png"}></img>
        <p className='description'>Should contain at least one small letter.</p>
      </li>
      <li className='requirement'>
        <img alt="icon" className='icon' src={/.*[+-/#@~.,%'!$^\\?:(){}[\]_]+.*/.test(state.passwordText) ? "https://cdn-icons-png.flaticon.com/128/5290/5290058.png" : "https://cdn-icons-png.flaticon.com/512/7698/7698976.png"}></img>
        <p className='description'>Should contain at least on <a href="https://docs.oracle.com/cd/E11223_01/doc.910/e11197/app_special_char.htm#BABCEHDG">special character</a>.</p>
      </li>
      <li className='requirement'>
        <img alt="icon" className='icon' src={/.*[0-9]+.*/.test(state.passwordText) ? "https://cdn-icons-png.flaticon.com/128/5290/5290058.png" : "https://cdn-icons-png.flaticon.com/512/7698/7698976.png"}></img>
        <p className='description'>Should contain at least one digit.</p>
      </li>
      <li className='requirement'>
        <img alt="icon" className='icon' src={commonPasswords.indexOf(state.passwordText.toLowerCase()) === -1 && state.passwordText.length > 5 ? "https://cdn-icons-png.flaticon.com/128/5290/5290058.png" : "https://cdn-icons-png.flaticon.com/512/7698/7698976.png"}></img>
        <p className='description'>Should not be in <a href='https://github.com/vlhomme/list-of-most-common-password/blob/master/passwords.json'>list of common passwords</a> .</p>
      </li>
    </ul>
      </div>
    
     <Checker passwordText={state.passwordText}  dispatch={dispatch} strength = {state.strength}/>
    </div>
  );
}

export default App;
