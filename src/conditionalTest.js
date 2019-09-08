import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  }
});

class Conditional extends Component {
  state = {
    visible: true,
    whichComponentToShow: "First Name",
    firstName: "Harry",
    lastName: "Potter",
    checkedA: false,
    checkedB: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    if (this.state.checkedA === true) {
      return (
        <div className="App">
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
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Last Name" });
            }}
          >
            Change Textbox
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Last Name") {
      return (
        <div className="App">
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
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "First Name" });
            }}
          >
            Change Textbox
          </button>
        </div>
      );
    }
    return null;
  }
}

export default withStyles(styles)(Conditional);
