import { SET_TEXT, CLEAR } from "../reducers"

const Checker = (props) => {
    return(
        <div className="checker">

            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Enter the password here." id="password" value={props.passwordText}
            onChange={
                (event) => {
                    props.dispatch({
                        type : SET_TEXT,
                        payload : event.target.value
                    });
                }
            }
            ></input>
            <div className="display" title="Result"></div>
            <button className="btn">Check</button>
            <button className="btn">Generate</button>
            <button className="btn" 
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