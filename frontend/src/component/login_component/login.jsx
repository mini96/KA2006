import React from "react";
import loginImg from "../../logo2.PNG";


const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};

 


export class Login extends React.Component {

  state = initialState;

 
  constructor(props) {
    super(props);
  }

 

  validate = () => {
    let emailError = "";
     let passwordError = "";
   // console.log("Validate is working");
    
    

    if (!this.state.email) {
      //console.log("dis working");
      emailError = "Email must not be empty";
    }
    else if (! /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.state.email)){
      emailError = "Email is invalid";
    }

    if (!this.state.password) {
      //console.log("dis working");
      passwordError = "Password must not be empty";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };



 
    // handleSubmit = event => {
    //   event.preventDefault();
    // }

  render() {
    
    

    return (
      <form className="base-container" ref={this.props.containerRef} onSubmit={this.handleSubmit}>
        <div className="header">Register for Red-Shift Estimator</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form_module">

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
      
                 />
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              name="password" 
              placeholder="password" 
                value={this.state.password}
                onChange={this.handleChange}/>
            </div>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
          <button type="button" className="btn">
            Guest Login
          </button>
        </div>
      </form>
    );
  }
}
