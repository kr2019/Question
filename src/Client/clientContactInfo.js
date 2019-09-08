import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";

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
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  button: {
    marginLeft: theme.spacing(2)
  },
  leftIcon: {
    marginLeft: theme.spacing(2)
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
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

const sessionTypes = [
  {
    value: "",
    label: ""
  },

  {
    value: "Lesson",
    label: "Lesson"
  },

  {
    value: "Therapy",
    label: "Therapy"
  }
];

class TopPanel extends React.Component {
  state = {
    contactFirstName: "John",
    contactLastName: "Smith",
    contactEmail: "jsmith@mail.com",
    contactTitle: "Mr.",
    contactPhone: "123-456-1111",
    contactCity: "Plano",
    contactState: "TX",
    contactZip: "75023"
    // multiline: "Controlled"
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
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.root} elevation={1}>
          {/*  Contact 1 */}
          <Grid container justify="center" alignItems="center">
            <Grid direction="column">
              <TextField
                id="standard-select-contactTitle"
                select
                label="Title"
                variant="outlined"
                className={classes.textField}
                value={this.state.contactTitle}
                onChange={this.handleChange("contactTitle")}
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
                id="standard-contactAddress"
                variant="outlined"
                label="Address"
                className={classes.textField}
                value={this.state.contactAddress}
                onChange={this.handleChange("contactAddress")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-contactZip"
                variant="outlined"
                label="Zip Code"
                className={classes.textField}
                value={this.state.contactZip}
                onChange={this.handleChange("contactZip")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                required
                id="standard-contactFirstName"
                label="First Name"
                variant="outlined"
                className={classes.textField}
                value={this.state.contactFirstName}
                onChange={this.handleChange("contactFirstName")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-contactCity-"
                variant="outlined"
                label="City"
                className={classes.textField}
                value={this.state.contactCity}
                onChange={this.handleChange("contactCity")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                required
                id="standard-contactEmail"
                variant="outlined"
                label="Email"
                className={classes.textField}
                value={this.state.contactEmail}
                onChange={this.handleChange("contactEmail")}
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
                value={this.state.contactLastName}
                onChange={this.handleChange("contactLastName")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-state"
                variant="outlined"
                label="State"
                className={classes.textField}
                value={this.state.contactState}
                onChange={this.handleChange("contactState")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-contactPhone"
                variant="outlined"
                label="Phone Number"
                className={classes.textField}
                value={this.state.contactPhone}
                onChange={this.handleChange("contactPhone")}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            {/*
            <Button
              size="medium"
              variant="contained"
              className={classes.button}
            >
              Add Additional
            </Button>
            */}
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
