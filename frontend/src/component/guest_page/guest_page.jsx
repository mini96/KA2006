import React from 'react';
import './guest_page.scss';
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";


const initialState = {

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

  handleSubmit = (event) => {
    event.preventDefault();


  };



    render() {

        console.log("IM IN FINALLY");

      

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
                  <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> 
              
               <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> 

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> 
              
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup> 

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Radio</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
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
