import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DateRange from "@material-ui/icons/DateRange";
import AutoRenew from "@material-ui/icons/Autorenew";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Search from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DatePickers from "../Old/datePicker";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    //these numbers are all relative to the accountsInvoicesTabs
    marginLeft: theme.spacing.unit * 6,
    align: "center",
    width: "63%"
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

class AssignedClientActions extends React.Component {
  state = {
    transactionType: "",
    paymentMethod: "",
    open: false,
    openV: false,
    payor: "",
    amount: "",
    date: "",
    type: "",
    description: "",
    startDate: "",
    endDate: "",
    payments: true,
    charges: false,
    refunds: false,
    discounts: true
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

  /* show date range diaglog box */
  handleClickOpenV = () => {
    this.setState({ openV: true });
  };

  /* close date range diaglog box */
  handleCloseV = () => {
    this.setState({ openV: false });
  };

  render() {
    const { classes } = this.props;
    const { payments, refunds, charges, discounts } = this.state;

    return (
      <div>
        <Paper className={classes.root} elevation={7}>
          {/* Date Range button */}
          <Button
            variant="contained"
            onClick={this.handleClickOpenV}
            className={classes.button}
          >
            <DateRange
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Date Range
          </Button>
          {/* Date Range dialog box */}
          <Dialog open={this.state.openV} onClose={this.handleCloseV}>
            <DialogTitle id="form-dialog-title">Date Range</DialogTitle>
            <DialogContent>
              <DatePickers />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseV} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleCloseV} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          {/* Search button */}
          <Button variant="contained" className={classes.button}>
            <Search
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Search
          </Button>
        </Paper>
      </div>
    );
  }
}

AssignedClientActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignedClientActions);
