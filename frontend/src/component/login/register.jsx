import React from "react"
import loginImg from"../../login.svg";


export class login extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="base-container">
        <div className="header"></div>
        <div className="content"></div>
        <div className="image">
            <img src={loginImg} />
            <div className="form">
             <div className="form-group">
                 <label htmlFor="Username"></label>
                 <input type="text" name="username" placeholder="username"/>
             </div>
             <div className="form-group">
                 <label htmlFor="Password"></label>
                 <input type="text" name="password" placeholder="password"/>
             </div>
            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">
                Submit
            </button>
        </div>
        </div>)
    };

}