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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import VisibilityIcon from "@material-ui/icons/Visibility";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 60,
    align: "center",
    width: "255"
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
  }
});

class clientActions extends React.Component {
  state = {
    open: false,
    name: true,
    phone: true,
    email: true,
    therapist: true,
    facility: true
  };

  /* change of team member dropdown */
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  /* show assign client diaglog box */
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  /* close assign client diaglog box */
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { name, email, phone, therapist, facility } = this.state;

    return (
      <div>
        <Paper className={classes.root} elevation={7}>
          <Button variant="contained" className={classes.button}>
            <AddIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Add New
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.handleClickOpen}
          >
            <VisibilityIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Show
          </Button>

          {/* Show dialog box */}
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle id="form-dialog-title">Show</DialogTitle>
            <DialogContent>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={name}
                        onChange={this.handleChange("name")}
                        value="name"
                      />
                    }
                    label="Name"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={email}
                        onChange={this.handleChange("email")}
                        value="email"
                      />
                    }
                    label="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={phone}
                        onChange={this.handleChange("phone")}
                        value="phone"
                      />
                    }
                    label="Phone"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={therapist}
                        onChange={this.handleChange("therapist")}
                        value="therapist"
                      />
                    }
                    label="Therapist"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={facility}
                        onChange={this.handleChange("facility")}
                        value="facility"
                      />
                    }
                    label="Facility"
                  />
                </FormGroup>
              </FormControl>
            </DialogContent>
          </Dialog>
        </Paper>
      </div>
    );
  }
}

clientActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(clientActions);
