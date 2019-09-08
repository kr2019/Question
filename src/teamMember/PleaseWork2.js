import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
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
  }
});

class TextFields extends React.Component {
  state = {
    multiline: "Controlled"
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container2} noValidate autoComplete="off">
        <Paper className={classes.root2} elevation={1}>
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
        </Paper>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
