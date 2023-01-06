import './App.css';
import Checker from './Components/Checker';
import {useReducer} from 'react'
import mainReducer, {initialState} from './reducers';



function App() {
  const[state, dispatch] = useReducer(mainReducer, initialState)


  return (
    <div className="App" >
      
     <Checker passwordText={state.passwordText} dispatch={dispatch} strength = {state.strength}/>
    </div>
  );
}

export default App;
