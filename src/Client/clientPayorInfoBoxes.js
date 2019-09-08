import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PleaseWork2 from "../teamMember/PleaseWork2";

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
    width: 1020,
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

const therapists = [
  {
    value: "",
    label: ""
  },

  {
    value: "Hermione Granger",
    label: "Hermione Granger"
  },

  {
    value: "Harry Potter",
    label: "Harry Potter"
  },

  {
    value: "John Smith",
    label: "John Smith"
  }
];

class PleaseWork extends React.Component {
  state = {
    firstName: "Jared",
    lastName: "Bob",
    email: "jb1111@mail.com",
    title: "Mr.",
    phone: "123-456-1111",
    street: "713 Fake Street",
    city: "Plano",
    zip: "75023"
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
              id="standard-street"
              variant="outlined"
              label="Street"
              className={classes.textField}
              value={this.state.street}
              onChange={this.handleChange("street")}
              margin="normal"
            />
          </Grid>

          <Grid direction="column">
            <TextField
              id="standard-city"
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
              id="standard-zip"
              variant="outlined"
              label="Zip Code"
              className={classes.textField}
              value={this.state.zip}
              onChange={this.handleChange("zip")}
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
