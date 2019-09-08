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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 33.5,
    align: "center",
    width: "728"
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
  dialogTitle: {
    marginBottom: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
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

const clientTypes = [
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
    clientTypes: "Individual",
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
        <Paper className={classes.root} elevation={7}>
          {/* Team member selection drop down */}
          <TextField
            id="standard-select-member"
            select
            label="Client Type"
            variant="outlined"
            className={classes.textField}
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
