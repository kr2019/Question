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
    //the width might have to change to actual number
    width: "700",
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 18,
    marginBottom: theme.spacing.unit * 10,
    overflowX: "auto"
  },
  state: {
    // open: false,
    //openV: false
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(name, cost, sessionLength, sessionType) {
  id += 1;
  return { id, name, cost, sessionLength, sessionType };
}

const rows = [
  createData("Billy Joe", "$20", "30 minutes", "Therapy"),
  createData("Sally May", "$20", "30 minutes", "Lessons"),
  createData("Joe Bob", "$20", "30 minutes", "Lessons"),
  createData("Emily Johnson", "$40", "60 minutes", "Therapy")
];

class assignedClientsTable extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">Name</CustomTableCell>
              <CustomTableCell align="center">Session Cost</CustomTableCell>
              <CustomTableCell align="center">Session Length</CustomTableCell>
              <CustomTableCell align="center">Session Type</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover className={classes.row} key={row.id}>
                <CustomTableCell align="center">{row.name}</CustomTableCell>
                <CustomTableCell align="center">{row.cost}</CustomTableCell>
                <CustomTableCell align="center">
                  {row.sessionLength}
                </CustomTableCell>
                <CustomTableCell align="center">
                  {row.sessionType}
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

assignedClientsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(assignedClientsTable);
