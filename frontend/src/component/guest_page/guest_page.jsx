import React from 'react';
import './guest_page.scss';
import Button from "react-bootstrap/Button";

class guest_page extends React.Component {



    render() {
        console.log("IM IN VITCH");
        
        return (
          <div>
            <Button variant="link" >Link</Button>
            
            <p className="signal">HELLO</p>
          </div>
        );
    }

}

export default guest_page;
