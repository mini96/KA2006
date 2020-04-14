import React, { useState, setState } from "react";
import './style.scss';
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
const initialState = {
just_here:""
};

class about_page extends React.Component {
    state=initialState;
  changePage = (event) => {
    this.setState({ redirect: true });
  };
  render() {


      if (this.state.redirect) {
        return <Redirect push to="/guest" />;
      }
    return (
      <div className="about_pg">
        <div className="header">
          <header>Redshift Estimator</header>
        </div>
        <div className="content">
          <p>
            This web-interface allows you to input parameters you have found{" "}
            <br />
            from your observatory and gives you an estimate of the distance{" "}
            <br />
            between the galaxies you want to get.
          </p>
        </div>
        <Button variant="dark" onClick={this.changePage}>
          Proceed
        </Button>
      </div>
    );
  }
}

export default about_page;
