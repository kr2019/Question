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
    width: "1200",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * -41,
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
  }
});

let id = 0;
function createData(
  primaryAccount,
  client,
  accountType,
  phone,
  email,
  paymentMethod,
  currentBal,
  lastPayDate
) {
  id += 1;
  return {
    id,
    primaryAccount,
    client,
    accountType,
    phone,
    email,
    paymentMethod,
    currentBal,
    lastPayDate
  };
}

const rows = [
  createData(
    "Smith, Mary",
    "Smith, Joe",
    "Family",
    "123-456-7899",
    "mary@mail.com",
    "Cash",
    "$30",
    "2/10/19"
  ),
  createData(
    "Johnson, Jack",
    "",
    "Individual",
    "123-456-7899",
    "jack@mail.com",
    "Card",
    "$0",
    "3/15/19"
  ),
  createData(
    "Smith, Mary",
    "Smith, Joe",
    "Family",
    "123-456-7899",
    "mary@mail.com",
    "Cash",
    "$30",
    "2/10/19"
  ),
  createData(
    "Smith, Mary",
    "Smith, Joe",
    "Family",
    "123-456-7899",
    "mary@mail.com",
    "Cash",
    "$30",
    "2/10/19"
  )
];
class accountsTable extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">
                Primary Account Holder
              </CustomTableCell>
              <CustomTableCell align="center">
                Client if different than primary
              </CustomTableCell>
              <CustomTableCell align="center">Account Type</CustomTableCell>
              <CustomTableCell align="center">Phone</CustomTableCell>
              <CustomTableCell align="center">Email</CustomTableCell>
              <CustomTableCell align="center">
                Primary Payment Method
              </CustomTableCell>
              <CustomTableCell align="center">Current Balance</CustomTableCell>
              <CustomTableCell align="center">
                Last Payment Date
              </CustomTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map(row => (
              <TableRow
                hover
                className={classes.row}
                key={row.id}
                onClick={this.handleClickOpenV}
              >
                <TableCell align="center">{row.primaryAccount}</TableCell>
                <TableCell align="center">{row.client}</TableCell>
                <TableCell align="center">{row.accountType}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="center">{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.currentBal}</TableCell>
                <TableCell align="right">{row.lastPayDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

accountsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(accountsTable);
