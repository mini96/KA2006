import React from "react";
import './guest_page.scss';
import Input_fields from '../input_field/input_fields'
// import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup'

// import FormControl from "react-bootstrap/FormControl";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";



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
  
  // constructor(props) {
  //   super(props);
  // }
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
            
              <div className="header2">
              <header>Redshift Estimator</header>
              </div>
             
              <div className="content">
                <text>
                  This web-interface allows you to input parameters you have found
              <br />
            from your observatory and gives you an estimate of the distance
                 <br />
            between the galaxies you want to get.
          </text>
              </div>
          
            
          
          
            <div className="guest_container">
             
            <Input_fields />
            </div>   


            <div className="output_box">
            <p>The output still has yet to come</p>
            </div>
          <div className="footer"></div>
          </div>
          
        );
    }

}

export default guest_page;
