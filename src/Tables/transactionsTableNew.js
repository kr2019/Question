import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Button from "@material-ui/core/Button";
import { lightBlue } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

let counter = 0;
function createData(date, payor, amount, paymentMethod, description) {
  counter += 1;
  return { id: counter, date, payor, amount, paymentMethod, description };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: "date", label: "Date" },
  { id: "payor", label: "Payor" },
  { id: "amount", label: "Amount" },
  { id: "paymentMethod", label: "Payment Method" },
  { id: "description", label: "Description" }
];

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: lightBlue[400],
    color: theme.palette.common.white,
    fontSize: 15
  },
  body: {
    fontSize: 12
  }
}))(TableCell);

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <CustomTableCell
                key={row.id}
                align="center"
                sortDirection={orderBy === row.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </CustomTableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired
  //rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    width: "140%",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * -9,
    overflowX: "auto"
  },
  table: {
    //minWidth: 1020,
  },
  tableWrapper: {
    overflowX: "auto"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    textField2: {
      marginLeft: theme.spacing.unit,
      //marginLeft: theme.spacing(4),
      width: 200
    }
  }
});

const transactionType = [
  {
    value: "charges",
    label: "charges"
  },

  {
    value: "discount",
    label: "discount"
  }
];

class EnhancedTable extends React.Component {
  state = {
    open: false,
    openV: false,
    order: "",
    orderBy: "",
    data: [
      createData("4/8/19", "Mary Smith", "$40.00", "Card", "", "$5.00"),
      createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", ""),
      createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", ""),
      createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", ""),
      createData("4/8/19", "Mary Smith", "$40.00", "Card", "", "$5.00"),
      createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", ""),
      createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", ""),
      createData("4/18/19", "Jim Adams", "$20.00", "Check", "Check # 456", "")
    ],
    date: "4/8/19",
    payor: "Mary Smith",
    amount: "$40.00",
    paymentMethod: "Card",
    description: "",
    charges: "",
    discounts: "",
    descripton: "",
    transType: "",
    page: 0,
    rowsPerPage: 5
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
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

  // isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;

    const { data, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              //numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
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
                  id="standard-description"
                  label="Description"
                  variant="outlined"
                  className={classes.textField2}
                  value={this.state.description}
                  onChange={this.handleChange("description")}
                  margin="normal"
                />
                <TextField
                  id="standard-select-title"
                  select
                  label="Transaction Type"
                  variant="outlined"
                  className={classes.textField2}
                  value={this.state.title}
                  onChange={this.handleChange("title")}
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
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  // const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      className={classes.row}
                      tabIndex={-1}
                      key={n.id}
                      onClick={this.handleClickOpenV}
                    >
                      <TableCell align="center">{n.date}</TableCell>
                      <TableCell align="center">{n.payor}</TableCell>
                      <TableCell align="center">{n.amount}</TableCell>
                      <TableCell align="center">{n.paymentMethod}</TableCell>
                      <TableCell align="center">{n.description}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
