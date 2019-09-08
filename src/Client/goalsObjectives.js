import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textFieldGoals: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },

  root: {
    width: "77.5%",
    marginLeft: theme.spacing.unit * 22,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2
  },

  textFieldGoals2: {
    marginLeft: theme.spacing.unit * 8,
    //marginRight: theme.spacing.unit,
    // marginTop: theme.spacing.unit,
    width: 500
  },

  button: {
    marginLeft: theme.spacing(2)
  },

  saveButton: {
    marginRight: theme.spacing(2)
  }
});

class TopPanel extends React.Component {
  state = {
    goal1: "This is my goal",
    obj1_1: "This is my objective",
    obj1_2: "This is my second one",
    goal2: "",
    obj2_1: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChange3 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.root} elevation={1}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <TextField
              id="standard-goal1"
              multiline
              variant="outlined"
              label="Goal"
              className={classes.textFieldGoals}
              value={this.state.goal1}
              onChange={this.handleChange("goal1")}
              margin="normal"
            />

            <TextField
              id="standard-obj1_1"
              multiline
              label="Objective"
              variant="outlined"
              className={classes.textFieldGoals2}
              value={this.state.obj1_1}
              onChange={this.handleChange("obj1_1")}
              margin="normal"
            />
            <TextField
              id="standard-obj1_2"
              multiline
              label="Objective"
              //variant="outlined"
              className={classes.textFieldGoals2}
              value={this.state.obj1_1}
              onChange={this.handleChange("obj1_2")}
              margin="normal"
            />
            <TextField
              id="standard-goal2"
              multiline
              //variant="outlined"
              label="Goal"
              className={classes.textFieldGoals}
              value={this.state.goal2}
              onChange={this.handleChange("goal2")}
              margin="normal"
            />

            <TextField
              id="standard-obj2"
              multiline
              label="Objective"
              //variant="outlined"
              className={classes.textFieldGoals2}
              value={this.state.obj2_1}
              onChange={this.handleChange("obj2")}
              margin="normal"
            />
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Button
              size="medium"
              variant="contained"
              className={classes.button}
            >
              +
            </Button>
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
