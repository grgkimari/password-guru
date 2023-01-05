
const Checker = (props) => {
    return(
        <div className="checker">
            <input type="text" placeholder="Enter the password here." name="password"></input>
            <div className="display" title="Result"></div>
            <button className="btn">Check</button>
            <button className="btn">Generate</button>
        </div>
    )
}

export default Checker