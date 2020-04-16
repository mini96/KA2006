import React from "react";
import './guest_page.scss';
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'

import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";



const initialState = {
  id:"",
  optical1: "",
  optical2: "",
  optical3: "",
  optical4: "",
  optical5: "",
  infared1: "",
  infared2: "",
  infared3: "",
  infared4: "",
  infared5: "",
  infared6: "",
  radio: "",

  optical1_e: "",
  optical2_e: "",
  optical3_e: "",
  optical4_e: "",
  optical5_e: "",
  infared1_e: "",
  infared2_e: "",
  infared3_e: "",
  infared4_e: "",
  infared5_e: "",
  infared6_e: "",
  radio_e: "",
};


class guest_page extends React.Component {
  
  constructor(props) {
    super(props);
  }
  state = initialState;
  handleSubmit = (event) => {
    event.preventDefault();


  };
  
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };



    render() {


      

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
          
           
            <div className="guest_container">
              <form onSubmit={this.handleSubmit}>


                <InputGroup size="sm" className="mb-3" 
                  onChange={this.handleChange}
                // onChange={this.handleChange}  
                >
                <InputGroup.Prepend >
                  <InputGroup.Text id="inputGroup-sizing-sm">ID</InputGroup.Text>
                </InputGroup.Prepend>
                  <FormControl 
                    type="text"
                    name="id"
                    aria-label="Small"
                   aria-describedby="inputGroup-sizing-sm"
                     />
              </InputGroup>
              
                <InputGroup size="sm" className="mb-3"onChange={this.handleChange}>
                  <InputGroup.Prepend >
                    <InputGroup.Text id="inputGroup-sizing-sm" >Optical</InputGroup.Text>
                </InputGroup.Prepend>
                  <FormControl name= "optical1" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  />
                </InputGroup>
            
              
                <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                </InputGroup.Prepend>
                  <FormControl name="optical2" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> 

                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name="optical3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>

                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name="optical4" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>

                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name="optical5" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              
                <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                </InputGroup.Prepend>
                  <FormControl name='infared1' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> 
              
                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name='infared2' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name='infared3' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name='infared4' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name='infared5' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name='infared6' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3"  onChange={this.handleChange}>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Radio</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl name='radio' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />

                  {/* <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="GHz"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">GHz</Dropdown.Item>
                    <Dropdown.Item href="#">MHz</Dropdown.Item>
                    <Dropdown.Item href="#">Hz</Dropdown.Item>
                  </DropdownButton> */}
                </InputGroup> 

                <Button type="submit">Submit</Button>

              </form>

            </div>


            <div className="footer"></div>
          </div>
          
        );
    }

}

export default guest_page;
