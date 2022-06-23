import "./Container.css"
const Container =() =>{
    return(
        <div className="container">
            <div className="coc">
                <div className="inputs">
                    <input type="email" id="email" placeholder="Enter your email address..." ></input> 
                </div>
                <div className="inputs">
                    <input type="password" id="pass" placeholder="Enter your password... " ></input>
                </div>
                <div className="input-submit">
                    <input type="submit" value="LOGIN" ></input>
                    <a href=" ">Forgot password?</a>
                    
                </div>
            </div>
            

        </div>
    );
}

//Enter your email address...
//Enter your password...
export default Container;