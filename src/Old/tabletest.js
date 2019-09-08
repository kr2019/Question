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
    //the width might have to change to an actual number
    width: "85%",
    marginTop: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 10,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(name, role, email, phone, clients) {
  id += 1;
  return { id, name, role, email, phone, clients };
}

const rows = [
  createData("John Smith", "Therapist", "jsmith@email.com", "123-123-1234", 4),
  createData("Jane Doe", "Intern", "jdoe@email.com", "123-123-1235", 2),
  createData(
    "Jennifer Robinson",
    "Admin Assistant",
    "jrobinson@email.com",
    "123-123-1236",
    0
  ),
  createData(
    "Harry Potter",
    "Therapist",
    "hpotter@email.com",
    "123-123-1237",
    2
  ),
  createData(
    "Hermione Granger",
    "Therapist",
    "hgranger@email.com",
    "123-123-1236",
    2
  )
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="center">Name</CustomTableCell>
            <CustomTableCell align="center">Role</CustomTableCell>
            <CustomTableCell align="center">Email</CustomTableCell>
            <CustomTableCell align="center">Phone</CustomTableCell>
            <CustomTableCell align="center">Clients</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell align="center">{row.name}</CustomTableCell>
              <CustomTableCell align="center">{row.role}</CustomTableCell>
              <CustomTableCell align="center">{row.email}</CustomTableCell>
              <CustomTableCell align="center">{row.phone}</CustomTableCell>
              <CustomTableCell align="center">{row.clients}</CustomTableCell>
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
