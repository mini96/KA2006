import React from "react";
import loginImg from "../../logo2.PNG";

const initialState = {
  
  email: "",
  password: "",
  
  emailError: "",
  passwordError: ""
};

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = initialState;


  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    
    let emailError = "";
    let passwordError = "";

    if (!this.state.email) {
      emailError = "Email cannot be blank";
    }
    else if (!/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.state.email)){
      emailError = "Email is invalid";
    }

    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
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


  render() {
    return (
      <form className="base-container" ref={this.props.containerRef} onSubmit={this.handleSubmit}>
        <div className="header">Red-Shift Estimator</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
              type="text" 
              name="email" 
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange} />
            </div>
            <div className="error">
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
            <div className = "error" >
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
