import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//THIS IS THE TEAM MEMBER INFORMATION TEXTBOXES

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
    width: 878,
    //marginLeft: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
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

class PleaseWork extends React.Component {
  state = {
    firstName: "Harry",
    lastName: "Potter",
    email: "harry@hogwarts.com",
    title: "Mr.",
    currentPassword: "test123",
    confirmPassword: "test123",
    phone: "123-456-1111",
    address: "713 Hogwarts Lane",
    primaryLocation: "Diagon Alley",
    npi: "731890"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.root} elevation={1}>
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
              id="standard-primary-location"
              variant="outlined"
              label="Primary Location"
              className={classes.textField}
              value={this.state.primaryLocation}
              onChange={this.handleChange("primaryLocation")}
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
        </Paper>
      </form>
    );
  }
}

PleaseWork.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PleaseWork);
