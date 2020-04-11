import React from 'react';
import './guest_page.scss';
import Button from "react-bootstrap/Button";

class guest_page extends React.Component {

    render() {

        return (
          <div>
            <Button variant="link" >Link</Button>
            <p>HELLO</p>
          </div>
        );
    }

}

export default guest_page;
