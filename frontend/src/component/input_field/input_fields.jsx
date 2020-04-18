import React from 'react'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'



const initialState = {
    id: "",
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

class input_field extends React.Component {


    state = initialState;
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();

        if (!isValid) {
            console.log(this.state);
            // clear error from form
            //  this.state.optical1_e="";
            //  this.state.optical2_e="";
            //  this.state.optical3_e="";
            //  this.state.optical4_e="";
            //  this.state.optical5_e="";
            //  this.state.infared1_e="";
            //  this.state.infared2_e="";
            //  this.state.infared3_e="";
            //  this.state.infared4_e="";
            //  this.state.infared5_e="";
            //  this.state.infared6_e="";
            //  this.state.radio_e="";
           
        }
    };



    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
       
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value,
        });
    };


    validate = () => {
        let optical1_e: "";
        let optical2_e: "";
        let optical3_e: "";
        let optical4_e: "";
        let optical5_e: "";
        let infared1_e: "";
        let infared2_e: "";
        let infared3_e: "";
        let infared4_e: "";
        let infared5_e: "";
        let infared6_e: "";
        let radio_e: "";


        if (!this.state.optical1){
          
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical1)) {
            optical1_e = "optical is not suppose to have words or special characters";
            console.log("this shit works");
        }

        if (!this.state.optical2) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical2)) {
            optical2_e = "optical is not suppose to have words or special characters";
        }

        if (!this.state.optical3) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical3)) {
            optical3_e = "optical is not suppose to have words or special characters";
        }

        if (!this.state.optical4) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical4)) {
            optical4_e = "optical is not suppose to have words or special characters";
        }

        if (!this.state.optical5) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical5)) {
            optical5_e = "optical is not suppose to have words or special characters";
        }

        if (!this.state.infared1) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infared1)) {
            infared1_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infared2){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infared2)) {
            infared2_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infared3){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infared3)) {
            infared3_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infared4){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infared4)) {
            infared4_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infared5){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infared5)) {
            infared5_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infared6){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infared6)) {
            infared6_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.radio){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.radio)) {
            radio_e = "radio is not suppose to have words or special characters";
        }



        if (optical1_e || optical2_e || optical3_e || optical4_e || optical5_e ||
            infared1_e || infared2_e || infared3_e || infared4_e || infared5_e || infared6_e || radio_e) {
            this.setState({ optical1_e, optical2_e, optical3_e, optical4_e, optical5_e, infared1_e, infared2_e, infared3_e, infared4_e, infared5_e, infared6_e, radio_e });
            return false;
        }

        return true;
    };


    render() {

        return (
            <div>

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

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-sm" >Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical1" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />  <div className="error">{this.state.optical1_e}</div>
                    </InputGroup>
                   


                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical2" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.optical2_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.optical3_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical4" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.optical4_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical5" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.optical5_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared1' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared1_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared2' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared2_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared3' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared3_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared4' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared4_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared5' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared5_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared6' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared6_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Radio</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='radio' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.radio_e}</div>

                    </InputGroup>

                    <Button type="submit">Submit</Button>

                </form>
            </div>
        );
    }

}

export default input_field;

