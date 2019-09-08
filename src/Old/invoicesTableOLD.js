import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";

import { lightBlue } from "@material-ui/core/colors";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: lightBlue[200],
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    //the width might have to change to actual number
    width: "800",
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * -18,
    // marginRight: theme.spacing.unit * 30,
    overflowX: "auto"
  },
  table: {
    //minWidth: 700
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
  row2: {
    backgroundColor: theme.palette.background.red
  }
});

let counter = 0;
function createData(
  status,
  invoiceDate,
  payor,
  invoiceDateRange,
  invoiceAmount
) {
  counter += 1;
  return {
    id: counter,
    status,
    invoiceDate,
    payor,
    invoiceDateRange,
    invoiceAmount
  };
}

const data = [
  createData("Paid", "2/5/19", "Smith, Mary", "1/31/19 - 2/1/19", "$120"),
  createData("Voided", "1/31/19", "Adams, John", "1/1/19 - 1/31/19", "$40"),
  createData("Paid", "2/5/19", "Smith, Mary", "1/31/19 - 2/1/19", "$120"),
  createData("Voided", "1/31/19", "Adams, John", "1/1/19 - 1/31/19", "$40")
];

class transTable extends React.Component {
  state = {
    open: false,
    openV: false,
    date: "",
    payor: "",
    amount: "",
    paymentMethod: "",
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

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    //this allows selected boxes to be checked
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    //also makes sure selected boxes to be checkd
    this.setState({ selected: newSelected });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, onSelectAllClick, numSelected, rowCount } = this.props;
    const { data, selected } = this.state;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead
          //numSelected={selected.length}
          //onSelectAllClick={this.handleSelectAllClick}
          //rowCount={data.length}
          >
            <TableRow>
              <CustomTableCell padding="checkbox">
                {/* check box for the header row */}
                <Checkbox
                  // shows the "intermediate" symbol instead of everything symbol
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={selected}
                  //selects all
                  onChange={onSelectAllClick}
                />
              </CustomTableCell>
              <CustomTableCell align="center">Status</CustomTableCell>
              <CustomTableCell align="center">Invoice Date</CustomTableCell>
              <CustomTableCell align="center">Payor</CustomTableCell>
              <CustomTableCell align="center">
                Invoice Date Range
              </CustomTableCell>
              <CustomTableCell align="center">Invoice Amount</CustomTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(n => {
              const isSelected = this.isSelected(n.id);
              return (
                <TableRow
                  hover
                  onClick={event => this.handleClick(event, n.id)}
                  //role="checkbox"
                  //aria-checked={isSelected}
                  tabIndex={-1}
                  key={n.id}
                  selected={isSelected}
                >
                  {/* checkboxes in cells */}
                  <TableCell padding="checkbox">
                    <Checkbox checked={selected} />
                  </TableCell>
                  <CustomTableCell align="center">
                    {data.status}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    {data.invoiceDate}
                  </CustomTableCell>
                  <CustomTableCell align="center">{data.payor}</CustomTableCell>
                  <CustomTableCell align="center">
                    {data.invoiceDateRange}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    {data.invoiceAmount}
                  </CustomTableCell>
                </TableRow>
              );
            })}
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
