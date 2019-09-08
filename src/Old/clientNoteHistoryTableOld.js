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
    //the width might have to change to actual number
    width: "650",
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 18,
    marginBottom: theme.spacing.unit * 10,
    overflowX: "auto"
  },
  state: {
    // open: false,
    //openV: false
    multiline: "Controlled"
  },

  textField: {
    marginLeft: theme.spacing.unit
    //marginRight: theme.spacing.unit,
  },

  textField2: {
    marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
    width: 400
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(noteName, sessionDate, noteDate) {
  id += 1;
  return { id, noteName, sessionDate, noteDate };
}

const rows = [
  createData("Note Name 1", "1/5/19", "1/7/19"),
  createData("Note Name 2", "1/12/19", "1/13/19"),
  createData("Note Name 3", "1/19/19", "1/19/19"),
  createData("Note Name 4", "1/26/19", "1/30/19")
];

class assignedClientsTable extends React.Component {
  state = {
    open: false,
    openV: false,
    sessionDateP: "1/5/19",
    note: "This is was an amazing session!",
    noteName: "Note 1"
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
              <CustomTableCell align="center">Note Name</CustomTableCell>
              <CustomTableCell align="center">Session Date</CustomTableCell>
              <CustomTableCell align="center">Note Date</CustomTableCell>
            </TableRow>
          </TableHead>

          <Dialog open={this.state.openV} onClose={this.handleCloseV}>
            <DialogTitle id="form-dialog-title">Session Notes</DialogTitle>
            <DialogContent>
              <TextField
                id="standard-date"
                label="Note Title"
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
                className={classes.textField}
                value={this.state.noteName}
                //onChange={this.handleChange("noteName")}
                margin="normal"
              />
              <TextField
                id="standard-payor"
                label="Session Date"
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
                className={classes.textField}
                value={this.state.sessionDateP}
                // onChange={this.handleChange("sessionDateP")}
                margin="normal"
              />
              <TextField
                id="standard-amount"
                label="Notes"
                variant="outlined"
                multiline
                InputProps={{
                  readOnly: true
                }}
                rows="15"
                className={classes.textField2}
                value={this.state.note}
                // onChange={this.handleChange("note")}
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
                onClick={this.handleClickOpenV}
                className={classes.row}
                key={row.id}
              >
                <CustomTableCell align="center">{row.noteName}</CustomTableCell>
                <CustomTableCell align="center">
                  {row.sessionDate}
                </CustomTableCell>
                <CustomTableCell align="center">{row.noteDate}</CustomTableCell>
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
