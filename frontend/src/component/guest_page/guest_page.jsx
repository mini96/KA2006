import React from 'react';
import './guest_page.scss';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
class guest_page extends React.Component {



    render() {
        console.log("IM IN VITCH");
        
        return (
          <div className="guest">
            <div className="guest_header">
              
            </div>
            <div className="content"></div>

            <Button>Allo</Button>

            <div className="footer"></div>
          </div>
        );
    }

}

export default guest_page;
