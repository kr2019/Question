import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";

import Button from "@material-ui/core/Button";
import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 192
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  state: {
    open: false,
    openV: false
  }
});

const billTypes = [
  {
    value: "Billable",
    label: "Billable"
  },

  {
    value: "Non-billable",
    label: "Non-billable"
  }
];

const clientTypes = [
  {
    value: "Individual",
    label: "Individual"
  },

  {
    value: "Facility",
    label: "Facility"
  }
];

const clients = [
  {
    value: "John Smith",
    label: "John Smith"
  },

  {
    value: "Jill Smith",
    label: "Jill Smith"
  },
  {
    value: "Ashley Flowers",
    label: "Ashley Flowers"
  }
];

const therapists = [
  {
    value: "Therapist 1",
    label: "Therapist 1"
  },

  {
    value: "Harry Potter",
    label: "Harry Potter"
  },
  {
    value: "Therapist 3",
    label: "Therapist 3"
  }
];

const categories = [
  {
    value: "None",
    label: "None"
  }
];

class OutlinedTextFields extends React.Component {
  state = {
    data: [],
    //id: 0,
    billType: null,
    clientType: null,
    title: null,
    client: null,
    therapist: null,
    location: null,
    category: null,
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
    information: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("http://localhost:5000/events")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  /*
  putDataToDB = (title, client) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:5000/api/putData", {
      id: idToBeAdded,
      title: title,
      client: client
      //start: start,
      //end: end,
      //client: client,
      //therapist: therapist
    });
  };
*/
  onSubmit(e) {
    //e.preventDefault();
    const obj = {
      title: this.state.title,
      billType: this.state.billType,
      clientType: this.state.clientType,
      therapist: this.state.therapist,
      location: this.state.location,
      category: this.state.category,
      client: this.state.client
    };
    axios
      .post("http://localhost:5000/putData2", obj)
      .then(res => console.log(res.data));
    /* this will clear everything after saving+closing */
    /*
    this.setState({
      billType: "",
      clientType: "",
      title: "",
      client: "",
      therapist: "",
      location: "",
      category: ""
    });
    */
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClose = () => {
    this.setState({
      open: false
      /*
      //this will set the values to blank once the window is closed
      billType: "",
      clientType: "",
      title: "",
      client: "",
      therapist: "",
      location: "",
      category: ""
*/
    });
  };

  render() {
    const { classes } = this.props;
    // const { selectedDate } = this.state;

    return (
      <Dialog open={this.state.open} onClose={this.handleClose}>
        <form className={classes.container} noValidate autoComplete="off">
          <DialogContent>
            <TextField
              required
              id="title"
              label="Title "
              className={classes.textField}
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="bill_type"
              select
              label="Bill Type"
              className={classes.textField}
              value={this.state.billType}
              onChange={e => this.setState({ billType: e.target.value })}
              //helperText="Please select your currency"
              margin="normal"
              variant="outlined"
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {billTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              id="client_type"
              select
              label="Client Type"
              className={classes.textField}
              value={this.state.clientType}
              onChange={e => this.setState({ clientType: e.target.value })}
              //helperText="Please select your currency"
              margin="normal"
              variant="outlined"
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {clientTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="client"
              select
              label="Client"
              className={classes.textField}
              value={this.state.client}
              onChange={e => this.setState({ client: e.target.value })}
              //helperText="Please select your currency"
              margin="normal"
              variant="outlined"
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {clients.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="therapist"
              select
              label="Therapist"
              className={classes.textField}
              value={this.state.therapist}
              onChange={e => this.setState({ therapist: e.target.value })}
              //helperText="Please select your currency"
              margin="normal"
              variant="outlined"
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {therapists.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="location"
              label="Location "
              className={classes.textField2}
              value={this.state.location}
              onChange={e => this.setState({ location: e.target.value })}
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="category"
              select
              label="Category"
              className={classes.textField2}
              value={this.state.category}
              onChange={e => this.setState({ category: e.target.value })}
              //helperText="Please select your currency"
              margin="normal"
              variant="outlined"
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {categories.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.onSubmit(
                  this.state.title,
                  this.state.billType,
                  this.state.clientType,
                  this.state.client,
                  this.state.thereapist,
                  this.state.location,
                  this.state.category
                );
                this.handleClose();
              }}
              color="primary"
            >
              Save & Close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
