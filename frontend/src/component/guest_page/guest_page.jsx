import React from 'react';
import './guest_page.scss';
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";
class guest_page extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

  };


    render() {
        console.log("IM IN VITCH");

      

        return (
          <div className="guest">
           
            <div className="guest_container">
              <form onSubmit={this.handleSubmit}>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">ID</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
              
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Optical u</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> 
              
               <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> 
              
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> 
              
               <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>

              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>

              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>

              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>



              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>


              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup><InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>

              </form>

            </div>


            <div className="footer"></div>
          </div>
        );
    }

}

export default guest_page;
