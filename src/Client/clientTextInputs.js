import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },

  menu: {
    width: 200
  },
  root: {
    width: 500
  }
});

const currencies = [
  {
    value: "USD",
    label: "Mr."
  },
  {
    value: "EUR",
    label: "Mrs."
  },
  {
    value: "BTC",
    label: "Ms."
  },
  {
    value: "JPY",
    label: "Miss"
  }
];

class TextFields extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "BTC"
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
              id="standard-name"
              label="Namwwe"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          </Grid>

          <Grid direction="column">
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
            />
          </Grid>

          <Grid direction="column">
            <TextField
              id="standard-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </Grid>

          <Grid direction="column">
            <TextField
              id="standard-select-title"
              select
              label="Title"
              className={classes.textField}
              value={this.state.currency}
              onChange={this.handleChange("currency")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <TextField
            id="standard-select-currency-native"
            select
            label="Native select"
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange("currency")}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Paper>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
