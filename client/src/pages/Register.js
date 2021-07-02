import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [admin, setAdmin] =useState(false)
  //call history from react-router-dom so that we can pass it to AuthProvider so it can be used
  //in that file
  const history = useHistory();
  //passing handleRegister from AuthContext
  const { handleRegister } = useContext(AuthContext);
  //using the custom form input hook(initial value in field, label and placeholder for input)
  //need to drill down to get value. i.e. email.value
  //FIXME: name isn't storing on submit.
  //TODO: Remove dummy data.
  const firstName = useFormInput("First Name", "Name");
  const lastName = useFormInput("Last Name", "Last Name");
  const email = useFormInput("Email@email.com", "Email");
  const password = useFormInput("Password", "Password");
  const ConfirmPassword = useFormInput("Password", "Confirm Password");

  const handleSubmit = (e) => {
    //prevents page from refreshing
    e.preventDefault();
    //Front end validation
    if (password.value !== ConfirmPassword.value || password.value.length < 6) {
      if (password.value !== ConfirmPassword.value) {
        alert("Passwords do not Match!");
      } else {
        alert("Password must be longer than 6 characters.");
      }
    } else {
      handleRegister(
        {
          first_name: firstName.value,
          last_name: lastName.value,
          email: email.value,
          password: password.value,
          admin: admin
        },
        history
      );
    }
  };
  return (
    <>
      <h1>Create Account</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control {...firstName} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control {...lastName} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control {...email} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control {...password} type="password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control {...ConfirmPassword} type="password" />
          
          <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Administer"
        onChange={(e)=>setAdmin(e.target.checked)}
      />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
