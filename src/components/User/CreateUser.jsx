import React, { Component } from 'react';
import { TextField, Grid, Card, CardContent, Button }from '@material-ui/core';
import styled from 'styled-components';

const Form = styled.form`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  color: grey;
  margin: 20px;
  width: 50vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
`;


class CreateUser extends Component {
  state = {
    name: "",
    password: "",
    email: ""
  };

  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
  })
  }



  render() {
    return (
      <div>
        <Container>
        <Grid>
          <Card>
            <CardContent>
            <Form>
              <h3>Please Sign Up</h3>
              <TextField
                id="outlined-name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                autoComplete="email"
                margin="normal"
                variant="outlined"
                fullWidth
            />
              <TextField
                id="outlined-password-input"
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                autoComplete="current-password"
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <Button>Submit</Button>
            </Form>
            </CardContent>
          </Card>
        </Grid>
        </Container>
      </div>
    );
  }
};

export default CreateUser;
