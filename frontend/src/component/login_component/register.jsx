import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="base-container" ref={this.props.containerRef}>
        <div className="header">Register for Red-Shift Estimator</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form_module">
         
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
          <button type="button" className="btn">
            Guest Login
          </button>
        </div>
      </form>
    );
  }
}
