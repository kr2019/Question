import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    //the width might have to change to actual number
    width: "1200",
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * -41,
    // marginRight: theme.spacing.unit * 30,
    overflowX: "auto"
  },
  table: {
    //minWidth: 700
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

function CustomizedTable(props) {
  const { classes } = props;

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
            <CustomTableCell align="center">Last Payment Date</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell align="center">
                {row.primaryAccount}
              </CustomTableCell>
              <CustomTableCell align="center">{row.client}</CustomTableCell>
              <CustomTableCell align="center">
                {row.accountType}
              </CustomTableCell>
              <CustomTableCell align="center">{row.phone}</CustomTableCell>
              <CustomTableCell align="center">{row.email}</CustomTableCell>
              <CustomTableCell align="center">
                {row.paymentMethod}
              </CustomTableCell>
              <CustomTableCell align="center">{row.currentBal}</CustomTableCell>
              <CustomTableCell align="center">
                {row.lastPayDate}
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
