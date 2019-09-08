import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },

  menu: {
    width: 200
  },
  root: {
    width: "100%",
    //marginLeft: theme.spacing.unit * 22,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2
  },

  container2: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 850
  },

  menu2: {
    width: 200
  },
  root2: {
    width: 1020,
    paddingBottom: theme.spacing.unit * 2
  },

  saveButton: {
    marginRight: theme.spacing(2)
  }
});

const titles = [
  {
    value: "",
    label: ""
  },

  {
    value: "Dr.",
    label: "Dr."
  },

  {
    value: "Miss",
    label: "Miss"
  },

  {
    value: "Mr.",
    label: "Mr."
  },
  {
    value: "Mrs.",
    label: "Mrs."
  },
  {
    value: "Ms.",
    label: "Ms."
  },
  {
    value: "Mx.",
    label: "Mx."
  }
];

class TopPanel extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    currentPassword: "",
    confirmPassword: "",
    phone: "",
    address: "",
    //primaryLocation: "",
    bday: "",
    city: "",
    zipCode: "",
    streetAddress: "",
    notes: "",
    multiline: "Controlled"
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/allclients")
      .then(response => {
        console.log("Got client data!");
        console.log(response.data);
        this.setState({
          memberData: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
      console.log("Client data interval set!");
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from client data!");
    }
  }

  onSubmit() {
    //experiment keeping preventDefault
    //e.preventDefault();

    const obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      title: this.state.title,
      currentPassword: this.state.currentPassword,
      confirmPassword: this.state.confirmPassword,
      phone: this.state.phone,
      address: this.state.address,
      //primaryLocation: this.state.primaryLocation,
      bday: this.state.bday,
      city: this.state.city,
      zipCode: this.state.zipCode,
      streetAddress: this.state.streetAddress,
      notes: this.state.notes
    };
    axios
      .post("http://localhost:5000/clients/registerclient", obj)
      .then(res => console.log(res.data));
    /* this will clear everything after saving+closing */

    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      title: this.state.title,
      currentPassword: this.state.currentPassword,
      confirmPassword: this.state.confirmPassword,
      phone: this.state.phone,
      address: this.state.address,
      //primaryLocation: this.state.primaryLocation,
      bday: this.state.bday,
      city: this.state.city,
      zipCode: this.state.zipCode,
      streetAddress: this.state.streetAddress,
      notes: this.state.notes
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.root} elevation={1}>
          <Grid container justify="center" alignItems="center">
            <TextField
              id="standard-select-title"
              select
              label="Title"
              variant="outlined"
              className={classes.textField}
              value={this.state.title}
              onChange={this.handleChange("title")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {titles.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-address"
              variant="outlined"
              label="Address"
              className={classes.textField}
              value={this.state.address}
              onChange={this.handleChange("address")}
              margin="normal"
            />

            <TextField
              id="standard-phone"
              variant="outlined"
              label="Phone Number"
              className={classes.textField}
              value={this.state.phone}
              onChange={this.handleChange("phone")}
              margin="normal"
            />

            <TextField
              required
              id="standard-firstName"
              label="First Name"
              variant="outlined"
              className={classes.textField}
              value={this.state.firstName}
              onChange={this.handleChange("firstName")}
              margin="normal"
            />

            <TextField
              id="standard-city-"
              variant="outlined"
              label="City"
              className={classes.textField}
              value={this.state.city}
              onChange={this.handleChange("city")}
              margin="normal"
            />

            <TextField
              required
              id="standard-email"
              variant="outlined"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange("email")}
              margin="normal"
            />

            <TextField
              required
              id="standard-lastNamename"
              label="Last Name"
              variant="outlined"
              className={classes.textField}
              value={this.state.lastName}
              onChange={this.handleChange("lastName")}
              margin="normal"
            />

            <TextField
              id="standard-state"
              variant="outlined"
              label="State"
              className={classes.textField}
              value={this.state.streetAddress}
              onChange={this.handleChange("streetAddress")}
              margin="normal"
            />

            <TextField
              required
              id="standard-password-input"
              variant="outlined"
              label="Password"
              className={classes.textField}
              type="password"
              value={this.state.currentPassword}
              onChange={this.handleChange("currentPassword")}
              //autoComplete="current-password"
              margin="normal"
            />

            <TextField
              id="standard-bday"
              variant="outlined"
              label="Birthday"
              className={classes.textField}
              value={this.state.bday}
              onChange={this.handleChange("bday")}
              margin="normal"
            />

            <TextField
              id="standard-zipCode"
              variant="outlined"
              label="Zip Code"
              className={classes.textField}
              value={this.state.zipCode}
              onChange={this.handleChange("zipCode")}
              margin="normal"
            />

            <TextField
              required
              id="standard-confirmPassword-input"
              variant="outlined"
              label="Confirm Password"
              className={classes.textField}
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChange("confirmPassword")}
              //autoComplete="current-password"
              margin="normal"
            />

            <TextField
              id="standard-full-width"
              label="Additional Notes"
              style={{ margin: 8 }}
              className={classes.textField2}
              value={this.state.notes}
              onChange={this.handleChange("notes")}
              placeholder="Add any additional notes here"
              fullWidth
              multiline
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />

            <Button
              className={classes.saveButton}
              size="large"
              variant="contained"
              onClick={() => {
                this.onSubmit(
                  this.state.firstName,
                  this.state.lastName,
                  this.state.email,
                  this.state.title,
                  this.state.currentPassword,
                  this.state.confirmPassword,
                  this.state.phone,
                  this.state.address,
                  //this.state.primaryLocation,
                  this.state.bday,
                  this.state.city,
                  this.state.zipCode,
                  this.state.streetAddress,
                  this.state.notes
                );
                //this.reloadPage();
              }}
            >
              Save
            </Button>
          </Grid>
        </Paper>
      </form>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
