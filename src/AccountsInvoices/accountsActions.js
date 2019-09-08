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
import Visibility from "@material-ui/icons/Visibility";
import Search from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import VisibilityIcon from "@material-ui/icons/Visibility";
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
    marginLeft: theme.spacing.unit * -30,
    align: "center",
    width: "205%"
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

const transactionType = [
  {
    value: "Charge",
    label: "Charge"
  },

  {
    value: "Discount",
    label: "Discount"
  },

  {
    value: "Payment",
    label: "Payment"
  },

  {
    value: "Refund",
    label: "Refund"
  }
];

const paymentMethod = [
  {
    value: "Card",
    label: "Card"
  },

  {
    value: "Cash",
    label: "Cash"
  },
  {
    value: "Check",
    label: "Check"
  }
];

const payor = [
  {
    value: "Mary Smith",
    label: "Mary Smith"
  },

  {
    value: "Jack Johnson",
    label: "Jack Johnson"
  }
];

class AssignedClientActions extends React.Component {
  state = {
    transactionType: "",
    paymentMethod: "",
    open: false,
    openV: false,
    open2: false,
    payor: "",
    amount: "",
    date: "",
    type: "",
    description: "",
    startDate: "",
    endDate: "",
    lastInvoiceDate: true,
    autopay: false,
    optionThree: false,
    optionFour: true
  };

  /* change of team member dropdown */
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
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

  handleClickOpen2 = () => {
    this.setState({ open2: true });
  };

  /* close date range diaglog box */
  handleClose2 = () => {
    this.setState({ open2: false });
  };

  render() {
    const { classes } = this.props;
    const { lastInvoiceDate, optionThree, autopay, optionFour } = this.state;

    return (
      <div>
        <Paper className={classes.root} elevation={7}>
          {/* New transaction button */}

          <Button
            variant="contained"
            onClick={this.handleClickOpen}
            className={classes.button}
          >
            <AddIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            New Transaction
          </Button>
          {/* New Transaction Dialog box */}
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle id="form-dialog-title">New Transaction</DialogTitle>
            <DialogContent>
              <TextField
                id="standard-select-transactionType"
                select
                label="Transaction Type"
                variant="outlined"
                margin="normal"
                className={classes.textField}
                value={this.state.transactionType}
                onChange={this.handleChange("transactionType")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {transactionType.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-select-paymentMethod"
                select
                label="Payment Method"
                variant="outlined"
                margin="normal"
                className={classes.textField}
                value={this.state.type}
                onChange={this.handleChange("paymentMethod")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {paymentMethod.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-select-payor"
                select
                label="Payor"
                variant="outlined"
                margin="normal"
                type="search"
                className={classes.textField}
                value={this.state.payor}
                onChange={this.handleChange("payor")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {payor.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-amount"
                label="Amount (dollars)"
                variant="outlined"
                className={classes.textField}
                value={this.state.cost}
                onChange={this.handleChange("amount")}
                margin="normal"
              />
              <TextField
                id="standard-date"
                label="Date"
                helperText="MM/DD/YYYY"
                variant="outlined"
                className={classes.textField}
                value={this.state.date}
                onChange={this.handleChange("date")}
                margin="normal"
              />
              <TextField
                id="standard-description"
                label="Description"
                variant="outlined"
                className={classes.textField}
                value={this.state.description}
                onChange={this.handleChange("description")}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
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
          {/* Auto-Invoice button */}
          <Button variant="contained" className={classes.button}>
            <AutoRenew
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Auto-Invoice
          </Button>

          {/* Show Inactive button */}
          <Button variant="contained" className={classes.button}>
            <Visibility
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Show Inactive
          </Button>
          {/* Search button */}
          <Button variant="contained" className={classes.button}>
            <Search
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Search
          </Button>
          {/* Show button */}
          <Button
            variant="contained"
            onClick={this.handleClickOpen2}
            className={classes.button}
          >
            <VisibilityIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Show
          </Button>
          {/* Show dialog box */}
          <Dialog open={this.state.open2} onClose={this.handleClose2}>
            <DialogTitle id="form-dialog-title">Show</DialogTitle>
            <DialogContent>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={lastInvoiceDate}
                        onChange={this.handleChange("lastInvoiceDate")}
                        value="lastInvoiceDate"
                      />
                    }
                    label="Last Invoice Date"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={optionThree}
                        onChange={this.handleChange("optionThree")}
                        value="optionThree"
                      />
                    }
                    label="Option Three"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={autopay}
                        onChange={this.handleChange("autopay")}
                        value="autopay"
                      />
                    }
                    label="Autopay"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={optionFour}
                        onChange={this.handleChange("optionFour")}
                        value="optionFour"
                      />
                    }
                    label="Option Four"
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

AssignedClientActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignedClientActions);
