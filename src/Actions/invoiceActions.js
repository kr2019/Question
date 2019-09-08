import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Mouse from "@material-ui/icons/Mouse";
import AutoRenew from "@material-ui/icons/Autorenew";
import Visibility from "@material-ui/icons/Visibility";
import Search from "@material-ui/icons/Search";
import Menu from "@material-ui/core/Menu";
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
import MailOutline from "@material-ui/icons/MailOutline";
import VerticalAlignBottom from "@material-ui/icons/VerticalAlignBottom";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import CancelOutlined from "@material-ui/icons/CancelOutlined";
import CheckPrevBal from "../AccountsInvoices/checkPrevBal";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    //these numbers are all relative to the accountsInvoicesTabs
    marginLeft: theme.spacing.unit * 4,
    align: "center",
    width: "438"
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

class invoiceActions extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    openV: false,
    payor: "",
    startDate: "",
    endDate: "",
    invoiceDate: "",
    invoiceAmount: "",
    dueDate: "",
    invoiceNotes: ""
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
  /* Select menu options */
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Email</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Download</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Delete</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Void</MenuItem>
      </Menu>
    );

    return (
      <div>
        <Paper className={classes.root} elevation={7}>
          {/* Show button */}
          <Button
            variant="contained"
            onClick={this.handleClickOpen}
            className={classes.button}
          >
            <AddIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            New Invoice
          </Button>
          {/* New Invoice dialog box */}
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle id="form-dialog-title">New Invoice</DialogTitle>
            <DialogContent>
              <CheckPrevBal />
              <TextField
                id="standard-select-payor"
                select
                label="Payor"
                variant="outlined"
                margin="normal"
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
                id="standard-startDate"
                label="Start date"
                helperText="MM/DD/YYYY"
                variant="outlined"
                className={classes.textField}
                value={this.state.startDate}
                onChange={this.handleChange("startDate")}
                margin="normal"
              />
              <TextField
                id="standard-endDate"
                label="End date"
                helperText="MM/DD/YYYY"
                variant="outlined"
                className={classes.textField}
                value={this.state.endDate}
                onChange={this.handleChange("endDate")}
                margin="normal"
              />
              <TextField
                id="standard-invoiceDate"
                label="Invoice Date"
                helperText="MM/DD/YYYY"
                variant="outlined"
                className={classes.textField}
                value={this.state.invoiceDate}
                onChange={this.handleChange("invoiceDate")}
                margin="normal"
              />
              <TextField
                id="standard-invoiceAmount"
                label="Invoice Amount"
                variant="outlined"
                className={classes.textField}
                value={this.state.invoiceAmount}
                onChange={this.handleChange("invoiceAmount")}
                margin="normal"
              />
              <TextField
                id="standard-dueDate"
                label="Due Date"
                helperText="MM/DD/YYYY"
                variant="outlined"
                className={classes.textField}
                value={this.state.dueDate}
                onChange={this.handleChange("dueDate")}
                margin="normal"
              />
              <TextField
                id="standard-invoiceNotes"
                label="Notes"
                variant="outlined"
                className={classes.textField}
                value={this.state.invoiceNotes}
                onChange={this.handleChange("invoiceNotes")}
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
          {/* Selected button */}
          <Button
            variant="contained"
            onClick={this.handleProfileMenuOpen}
            className={classes.button}
          >
            <Mouse
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Selected
          </Button>
          {renderMenu}
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

invoiceActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(invoiceActions);
