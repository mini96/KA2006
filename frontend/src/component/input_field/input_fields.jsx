import React from 'react'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
class input_field extends React.Component {





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
                        <FormControl name="optical1" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>


                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical2" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical4" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
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

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared2' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared3' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared4' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared5' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared6' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Radio</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='radio' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />

                    </InputGroup>

                    <Button type="submit">Submit</Button>

                </form>
            </div>
        );
    }

}

export default input_field;

