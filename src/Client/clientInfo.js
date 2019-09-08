import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

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
    // width: "77.5%",
    // marginLeft: theme.spacing.unit * 22,
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
    firstName: "John",
    lastName: "Smith",
    email: "jsmith@mail.com",
    title: "Mr.",

    currentPassword: "test123",
    confirmPassword: "test123",
    phone: "123-456-1111",
    address: "123 Maple Street",
    primaryLocation: "Main Office",
    bday: "2/20/1998",
    city: "Plano",
    zipCode: "75023",
    st: "TX",
    multiline: "Controlled"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg">
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
                value={this.state.st}
                onChange={this.handleChange("st")}
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
                //autoComplete="current-password"
                margin="normal"
              />

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
      </Container>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
