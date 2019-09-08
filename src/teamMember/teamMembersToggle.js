import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PermIdentity from "@material-ui/icons/PermIdentity";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 33.5,
    align: "center",
    width: "495"
  },
  dialogTitle: {
    marginBottom: theme.spacing.unit
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  menu: {
    width: 200
  }
});

const members = [
  {
    value: "Jane Doe",
    label: "Jane Doe"
  },

  {
    value: "Hermione Granger",
    label: "Hermione Granger"
  },
  {
    value: "Harry Potter",
    label: "Harry Potter"
  }
];

class AssignedClientActions extends React.Component {
  state = {
    member: "Harry Potter",
    open: false,
    client: "",
    cost: "",
    length: "",
    type: ""
  };

  /* change of team member dropdown */
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          id="standard-select-member"
          select
          label="Team Member"
          variant="outlined"
          className={classes.textField}
          value={this.state.member}
          onChange={this.handleChange("member")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
        >
          {members.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

AssignedClientActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignedClientActions);
