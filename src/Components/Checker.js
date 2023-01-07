import { SET_TEXT, CLEAR, CHECK_STRENGTH } from "../reducers"

const stringifyStrength = (strength) => {
    switch(strength){
        case 1:
            return "Very weak"
        case 2:
            return "Very weak"
        case 3:
            return "Very weak"
        case 4:
            return "Weak"
        case 5:
            return "Weak"
        case 6:
            return "Okay"
        case 7:
            return "Strong"
        case 8:
            return "Strong"
        case 9:
            return "Very Strong"
        case 10:
            return "Very Strong"
            case 11 : 
                return "Legendary"
        default:
            return "Type password in the input field above."
    }
}

const Checker = (props) => {
    return(
        <div className="checker">

            <label htmlFor="password" className="label">Password</label>
            <input type="text" placeholder="Enter the password here." id="password" value={props.passwordText}
            onChange={
                (event) => {
                    props.dispatch({
                        type : SET_TEXT,
                        payload : event.target.value
                    });
                    props.dispatch({
                        type : CHECK_STRENGTH,
                    });
                }
            }
            ></input>
            <div className="display" title="Result">
                <h1>{props.strength}</h1>
                <h3>{
                    stringifyStrength(props.strength)
                    }</h3>
                </div>
            {/* <button className="btn">Check</button> */}
            <button className="btn" id="generate">Generate</button>
            <button className="btn" id="clear" 
            onClick={() => {
                props.dispatch({
                    type : CLEAR
                })
            }}
            >Clear</button>
        </div>
    )
}

export default Checker