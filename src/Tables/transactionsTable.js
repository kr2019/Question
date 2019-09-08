import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { lightBlue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: lightBlue[400],
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "610",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * -7,
    overflowX: "auto"
  },
  table: {
    //  minWidth: 700,
  },

  state: {
    open: false,
    openV: false
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },

  textField2: {
    //marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    //width: 100
  }
});

let id = 0;
function createData(date, payor, amount, paymentMethod, description) {
  id += 1;
  return { id, date, payor, amount, paymentMethod, description };
}

const rows = [
  createData("4/8/19", "Mary Smith", "$40.00", "Card", "", "$5.00"),
  createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", ""),
  createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", ""),
  createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", "")
];

class transTable extends React.Component {
  state = {
    open: false,
    openV: false,
    date: "4/8/19",
    payor: "Mary Smith",
    amount: "$40.00",
    paymentMethod: "Card",
    description: "",
    charges: "",
    discounts: "",
    descripton: ""
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

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Date</CustomTableCell>
              <CustomTableCell align="center">Payor</CustomTableCell>
              <CustomTableCell align="center">Amount</CustomTableCell>
              <CustomTableCell align="right">Payment Method</CustomTableCell>
              <CustomTableCell align="left">Description</CustomTableCell>
            </TableRow>
          </TableHead>
          <Dialog open={this.state.openV} onClose={this.handleCloseV}>
            <DialogTitle id="form-dialog-title">
              Transaction Details
            </DialogTitle>
            <DialogContent>
              <TextField
                id="standard-date"
                label="Date"
                variant="outlined"
                className={classes.textField2}
                value={this.state.date}
                onChange={this.handleChange("date")}
                margin="normal"
              />
              <TextField
                id="standard-payor"
                label="Payor"
                variant="outlined"
                className={classes.textField2}
                value={this.state.payor}
                onChange={this.handleChange("payor")}
                margin="normal"
              />
              <TextField
                id="standard-amount"
                label="Amount"
                variant="outlined"
                className={classes.textField2}
                value={this.state.amount}
                onChange={this.handleChange("amount")}
                margin="normal"
              />
              <TextField
                id="standard-paymentMethod"
                label="Payment Method"
                variant="outlined"
                className={classes.textField2}
                value={this.state.paymentMethod}
                onChange={this.handleChange("paymentMethod")}
                margin="normal"
              />
              <TextField
                id="standard-charges"
                label="Charges"
                variant="outlined"
                className={classes.textField2}
                value={this.state.charges}
                onChange={this.handleChange("charges")}
                margin="normal"
              />
              <TextField
                id="standard-discounts"
                label="Discounts"
                variant="outlined"
                className={classes.textField2}
                value={this.state.discounts}
                onChange={this.handleChange("discounts")}
                margin="normal"
              />
              <TextField
                id="standard-description"
                label="Description"
                variant="outlined"
                className={classes.textField2}
                value={this.state.description}
                onChange={this.handleChange("description")}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseV} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleCloseV} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <TableBody>
            {rows.map(row => (
              <TableRow
                hover
                className={classes.row}
                key={row.id}
                onClick={this.handleClickOpenV}
              >
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.payor}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="right">{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.discount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

transTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(transTable);
