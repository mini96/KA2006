import React from "react";
import './guest_page.scss';
import Input_fields from '../input_field/input_fields'
 import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup'

// import FormControl from "react-bootstrap/FormControl";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";





class guest_page extends React.Component {
  state =  {
    visable : false
  };
  // constructor(props) {
  //   super(props);
  // }
  
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);

  }
    render() {


      

        return (
          
            <div className="about_pg">
            
              <div className="header2">
              <header>Redshift Estimator</header>
              </div>
             
              <div className="con">
                <p>
                  This web-interface allows you to input parameters you have found
              <br />
            from your observatory and gives you an estimate of the distance
                 <br />
            between the galaxies you want to get.
          </p>
              
            
                
       

            <input type="file" onChange={this.fileSelectedHandler} />
              <button onClick={this.fileUploadHandler} class="btn btn-light">Upload</button>
           
            <p>
              Or if you are just looking to calculate for a single object then 
              press the button below
            </p>
              <button type="button" class="btn btn-light" onClick={() =>{
              this.setState({ visable : !this.state.visable });
            }} >Proceed</button>
</div>
            {this.state.visable ? <div className="guest_container"> <Input_fields /> </div> : null}
         
         
         
           {/* 
           <Input_fields />
           
           </div>
             */}
      
            
           


            <div className="output_box">
            <p>The output still has yet to come</p>
            </div>
          <div className="footer"></div>
          

          </div>
          
        );
    }

}

export default guest_page;
