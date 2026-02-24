import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Login() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((response) => {
        const users = response.data;

        const foundUser = users.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        if (foundUser) {
          history.push('/main');
        } else {
          history.push('/error');
        }
      })
      .catch(() => {
        history.push('/error');
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormGroup>

      <Button color="primary">Sign In</Button>
    </Form>
  );
}
