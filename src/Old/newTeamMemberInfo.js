import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },

  marg: {
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },

  colorSwitchBase: {
    color: red[300],
    "&$colorChecked": {
      color: green[500],
      "& + $colorBar": {
        backgroundColor: green[500]
      }
    }
  },
  colorBar: {},
  colorChecked: {},

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

  saveButton: {
    marginRight: theme.spacing(2)
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
  button: {
    width: 1020,
    paddingBottom: theme.spacing.unit * 2
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
    checkedActive: false,
    checkedAdmin: false,
    checkedThera: false,
    checkedIntern: false,
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    currentPassword: "",
    confirmPassword: "",
    phone: "",
    address: "",
    primaryLocation: "",
    npi: "",
    city: "",
    zipCode: "",
    multiline: "Controlled"
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/members")
      .then(response => {
        console.log("Got team member data!");
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
      console.log("Team member interval set!");
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from team data!");
    }
  }

  onSubmit() {
    //experiment keeping preventDefault
    //e.preventDefault();

    const obj = {
      //title: this.state.title,
      checkedActive: this.state.checkedActive,
      checkedAdmin: this.state.checkedAdmin,
      checkedThera: this.state.checkedThera,
      checkedIntern: this.state.checkedIntern,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      title: this.state.title,
      currentPassword: this.state.currentPassword,
      confirmPassword: this.state.confirmPassword,
      phone: this.state.phone,
      address: this.state.address,
      primaryLocation: this.state.primaryLocation,
      npi: this.state.npi,
      city: this.state.city,
      zipCode: this.state.zipCode
    };
    axios
      .post("http://localhost:5000/members/registermember", obj)
      .then(res => console.log(res.data));
    /* this will clear everything after saving+closing */

    this.setState({
      checkedActive: this.state.checkedActive,
      checkedAdmin: this.state.checkedAdmin,
      checkedThera: this.state.checkedThera,
      checkedIntern: this.state.checkedIntern,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      title: this.state.title,
      currentPassword: this.state.currentPassword,
      confirmPassword: this.state.confirmPassword,
      phone: this.state.phone,
      address: this.state.address,
      primaryLocation: this.state.primaryLocation,
      npi: this.state.npi,
      city: this.state.city,
      zipCode: this.state.zipCode
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange3 = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <form /* className={classes.container} */ noValidate autoComplete="off">
        <Paper className={classes.root} elevation={1}>
          <Grid container row justify="space-between">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.checkedActive}
                    onChange={this.handleChange3("checkedActive")}
                    value="checkedActive"
                    marginLeft="theme.spacing.unit * 20"
                    className={classes.marg}
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar
                    }}
                  />
                }
                label="Active"
              />
            </FormGroup>

            {/*
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedAdmin}
                    onChange={this.handleChange3("checkedAdmin")}
                    value="checkedAdmin"
                    color="default"
                  />
                }
                label="Administrator"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedThera}
                    onChange={this.handleChange3("checkedThera")}
                    value="checkedThera"
                    color="default"
                  />
                }
                label="Therapist"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedIntern}
                    onChange={this.handleChange3("checkedIntern")}
                    value="checkedIntern"
                    color="default"
                  />
                }
                label="Intern"
              />
            </FormGroup>
            */}
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid direction="column">
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
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-phone"
                variant="outlined"
                label="Phone Number"
                className={classes.textField}
                value={this.state.phone}
                onChange={this.handleChange("phone")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
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
            </Grid>

            <Grid direction="column">
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
            </Grid>

            <Grid direction="column">
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
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-address"
                variant="outlined"
                label="Address"
                className={classes.textField}
                value={this.state.address}
                onChange={this.handleChange("address")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
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
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-city-"
                variant="outlined"
                label="City"
                className={classes.textField}
                value={this.state.city}
                onChange={this.handleChange("city")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
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
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-zipCode"
                variant="outlined"
                label="Zip Code"
                className={classes.textField}
                value={this.state.zipCode}
                onChange={this.handleChange("zipCode")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-npi"
                variant="outlined"
                label="NPI Number"
                className={classes.textField}
                value={this.state.npi}
                onChange={this.handleChange("npi")}
                margin="normal"
              />
            </Grid>
            <Grid direction="column">
              <TextField
                id="standard-primary-location"
                variant="outlined"
                label="Primary Location"
                className={classes.textField}
                value={this.state.primaryLocation}
                onChange={this.handleChange("primaryLocation")}
                margin="normal"
              />
            </Grid>

            <TextField
              id="standard-full-width"
              label="Additional Notes"
              style={{ margin: 8 }}
              className={classes.textField2}
              placeholder="Add any additional notes here"
              fullWidth
              multiline
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid container direction="row" justify="flex-end">
            <Button
              className={classes.saveButton}
              size="large"
              variant="contained"
              onClick={() => {
                this.onSubmit(
                  this.state.checkedActive,
                  this.state.checkedAdmin,
                  this.state.checkedThera,
                  this.state.checkedIntern,
                  this.state.firstName,
                  this.state.lastName,
                  this.state.email,
                  this.state.title,
                  this.state.currentPassword,
                  this.state.confirmPassword,
                  this.state.phone,
                  this.state.address,
                  this.state.primaryLocation,
                  this.state.npi,
                  this.state.city,
                  this.state.zipCode
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
