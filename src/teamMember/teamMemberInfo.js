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
    checkedActive: true,
    checkedAdmin: false,
    checkedThera: true,
    checkedIntern: false,
    firstName: "Harry",
    lastName: "Potter",
    email: "harry@hogwarts.com",
    title: "Mr.",
    currentPassword: "test123",
    confirmPassword: "test123",
    phone: "123-456-1111",
    address: "713 Hogwarts Lane",
    primaryLocation: "Diagon Alley",
    npi: "731890",
    city: "London",
    zipCode: "77777",
    multiline: "Controlled"
  };

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
