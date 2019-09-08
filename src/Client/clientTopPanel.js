import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EmailIcon from "@material-ui/icons/Email";
import FilterIcon from "@material-ui/icons/FilterList";
import ActiveRadioButton from "../Old/activeRadioButton";
import TeamMemberChecked from "../Old/teamMemberChecked";
import MemberAvatar from "../Old/memberAvatarOLD";
import Grid from "@material-ui/core/Grid";
import clientTextInputs from "./clientTextInputs";
import ClientChecked from "./clientChecked";
import ClientAvatar from "./clientAvatar";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
    paddingLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * -6,
    marginLeft: theme.spacing.unit * 22,
    marginRight: theme.spacing.unit * 22,
    align: "center",
    width: "1020",
    height: "120"
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },

  textField2: {
    marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
    width: 200
  }
});

const clientTypes = [
  {
    value: "",
    label: ""
  },

  {
    value: "Individual",
    label: "Individual"
  },

  {
    value: "Facility",
    label: "Facility"
  }
];

class AssignedClientActions extends React.Component {
  state = {
    clientType: "Individual",
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
        <ClientAvatar />
        <Paper className={classes.root} elevation={1}>
          <ClientChecked />
          <TextField
            id="standard-select-member"
            select
            label="Client Type"
            variant="outlined"
            className={classes.textField2}
            value={this.state.clientType}
            onChange={this.handleChange("clientType")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {clientTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Paper>
      </div>
    );
  }
}

AssignedClientActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignedClientActions);
