import React from 'react';
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';


const Application = (props) => {
  
  return (
    
    <Form>
      <form action="mailto:cadelenglishthegenius@gmail.com" method="post" enctype="text/plain">
        <h1>Apply Now</h1>
      <p></p>     
      <p></p> 
      <FormGroup>
        <Label for="examplefirst_name">First Name</Label>
        <Input type="first_name" name="First Name:" id="examplefirst_name" placeholder="First Name" />
      </FormGroup>
      <FormGroup>
        <Label for="examplelast_name">Last Name</Label>
        <Input type="last_name" name="Last Name:" id="examplelast_name" placeholder="Last Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="Email:" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplephone_number">Phone Number</Label>
        <Input type="phone_number" name="Phone Number:" id="examplephone_number" placeholder="Phone Number" />
      </FormGroup>
           
      <FormGroup>
        <Label for="exampleaddress">Address</Label>
        <Input type="address" name="Address:" id="exampleaddress" placeholder="Address" />
      </FormGroup>
      <FormGroup>
        <Label for="examplecity">City</Label>
        <Input type="city" name="City:" id="examplecity" placeholder="City" />
      </FormGroup>

      <FormGroup>
        <Label for="examplestate">State</Label>
        <Input type="state" name="State:" id="examplestate" placeholder="State" />
      </FormGroup>

      <FormGroup>
        <Label for="examplezip">Zip</Label>
        <Input type="zip" name="Zip code:" id="examplezip" placeholder="Zip" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Best time to contact you:</Label>
        <Input type="textarea" name="Best time to contact you:" id="exampleText" />
      </FormGroup>
      <FormGroup tag="fieldset">
      </FormGroup>
      <Button type="submit">Submit and attach resume here</Button>
      </form>
    </Form>
  );
}

export default Application;