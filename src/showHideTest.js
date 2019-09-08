import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
//import FormUserDetails from './FormUserDetails';
//import FormPersonalDetails from './FormPersonalDetails';
//import Confirm from './Confirm';
//import Success from './Success';

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import NewClientInfo from "./newClientInfo";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  }
});

class UserForm extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    address: "",
    address2: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    //const { firstName, lastName, email, occupation, city, bio } = this.state;
    // const values = { firstName, lastName, email, occupation, city, bio };
    const { classes } = this.props;

    switch (step) {
      case 1:
        return <NewClientInfo />;

      case 2:
        return (
          <TextField
            id="standard-address"
            variant="outlined"
            label="Address2"
            className={classes.textField}
            value={this.state.address}
            onChange={this.handleChange("address2")}
            margin="normal"
          />
        );
      case 3:
        return (
          <TextField
            id="standard-address"
            variant="outlined"
            label="Address"
            className={classes.textField}
            value={this.state.address}
            onChange={this.handleChange("address")}
            margin="normal"
          />
        );
      case 4:
        return (
          <TextField
            id="standard-address"
            variant="outlined"
            label="Address2"
            className={classes.textField}
            value={this.state.address}
            onChange={this.handleChange("address2")}
            margin="normal"
          />
        );
      default:
        return "Unknown step";
    }
  }
}

export default withStyles(styles)(UserForm);
