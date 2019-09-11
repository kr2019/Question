import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Grid from "@material-ui/core/Grid";

import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AssignedClientsTable from "./assignedClientsTable";
import FilesTable from "./filesTable";

import UploadAction from "./uploadAction";

import MemberAvatar from "./memberAvatar";
import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
import Blue from "@material-ui/core/colors/blue";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";

import axios from "axios";

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
    // paddingLeft: theme.spacing.unit,
    //marginTop: theme.spacing.unit * 15,
    //marginLeft: theme.spacing.unit * 22,
    //marginRight: theme.spacing.unit * 22

    align: "center",
    //width: "66%",
    height: "130"
  },

  toggle: {
    paddingRight: theme.spacing.unit * 30
  },

  marg: {
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },

  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500],
    width: 100,
    height: 100,
    fontSize: 40,
    marginBottom: theme.spacing.unit * -28,
    marginRight: theme.spacing.unit * 18
  },

  colorSwitchBase: {
    color: red[300],
    "&$colorChecked": {
      color: green[500],
      "& + $colorBar": {
        backgroundColor: green[500]
      }
    }
  },
  colorBar: {},
  colorChecked: {},

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 300
  },

  textFieldTop: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing(5),
    width: 300
  },
  menu: {
    width: 200
  },

  checked: {},

  root2: {
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Blue[800]
  },
  infoRoot: {
    marginBottom: theme.spacing.unit * 2
  },

  assignRoot: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 5,
    //marginLeft: theme.spacing.unit * 33.5,
    // align: "center",
    width: "14.5%"
  },

  floatButton: {
    marginTop: theme.spacing(4),
    margin: theme.spacing.unit,
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  saveButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  leftIcon: {
    // marginRight: theme.spacing.unit
  }
});

const members = [
  {
    value: "Jane Doe",
    label: "Jane Doe"
  },

  {
    value: "Hermione Granger",
    label: "Hermione Granger"
  },
  {
    value: "Harry Potter",
    label: "Harry Potter"
  }
];

const titles = [
  {
    value: "",
    label: ""
  },

  {
    value: "Dr.",
    label: "Dr."
  },

  {
    value: "Miss",
    label: "Miss"
  },

  {
    value: "Mr.",
    label: "Mr."
  },
  {
    value: "Mrs.",
    label: "Mrs."
  },
  {
    value: "Ms.",
    label: "Ms."
  },
  {
    value: "Mx.",
    label: "Mx."
  }
];

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b2dfdb" }
  }
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: "#80cbc4" }
  }
});

class TopPanel extends React.Component {
  state = {
    checkedA: true,
    member: "Harry Potter",
    therapistData: [],
    clientData: [],
    open: false,
    cost: "",
    length: "",
    type: "",
    checkedAdmin: true,
    checkedThera: true,
    checkedIntern: false,
    tabValue: 0,
    //client info
    firstName: "Harry",
    lastName: "Potter",
    email: "harry@hogwarts.com",
    title: "Mr.",
    currentPassword: "test123",
    confirmPassword: "test123",
    phone: "123-456-1111",
    address: "713 Hogwarts Lane",
    location: "Diagon Alley",
    npi: "731890",
    city: "London",
    bday: "7/31/92",
    state: "TX",
    zipCode: "77777",
    multiline: "Controlled",

    // assigned clients
    client: "",
    assignOpen: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/members")
      .then(response => {
        console.log("Got therapist data data!");
        console.log(response.data);
        this.setState({
          therapistData: response.data
        });
      })
      .then(response2 => {
        return axios.get("http://localhost:5000/allclients").then(response2 => {
          console.log("Got client data!");
          console.log(response2.data);
          this.setState({
            clientData: response2.data
          });
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
      console.log("Data interval set!");
    }
  }

  // kills a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from client data!");
    }
  }

  /* change of team member dropdown */
  handleChangeValue = name => event => {
    this.setState({ [name]: event.target.value });
  };

  // change of check boxes
  handleChangeChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeTab = (event, tabValue) => {
    this.setState({ tabValue });
  };

  //show client details box;
  handleClickClientOpen = () => {
    this.setState({ assignOpen: true });
  };

  handleClientClose = () => {
    this.setState({ assignOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { tabValue, clientData, therapistData } = this.state;

    return (
      <div>
        <Container maxWidth="lg">
          {/* Avatar */}
          <Grid container justify="center" alignItems="center">
            <MemberAvatar />
          </Grid>
          <Paper elevation={2}>
            <MuiThemeProvider theme={theme}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedA}
                      onChange={this.handleChangeChecked("checkedA")}
                      value="checkedA"
                      marginLeft="theme.spacing.unit * 20"
                      className={classes.marg}
                      /*
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar
                    }} */
                      color="primary"
                    />
                  }
                  label="Active"
                />
              </FormGroup>
            </MuiThemeProvider>
            {/* member drop down */}
            <Grid container row justify="space-between">
              <TextField
                id="standard-select-member"
                select
                label="Team Member"
                variant="outlined"
                className={classes.textField}
                value={this.state.member}
                onChange={this.handleChangeValue("member")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {therapistData.map(option => (
                  <MenuItem key={option.value} value={option.member_full_name}>
                    {option.member_full_name}
                  </MenuItem>
                ))}
              </TextField>
              <MuiThemeProvider theme={theme}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedAdmin}
                        onChange={this.handleChangeChecked("checkedAdmin")}
                        value="checkedAdmin"
                        color="primary"
                      />
                    }
                    label="Administrator"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedThera}
                        onChange={this.handleChangeChecked("checkedThera")}
                        value="checkedThera"
                        color="primary"
                      />
                    }
                    label="Therapist"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedIntern}
                        onChange={this.handleChangeChecked("checkedIntern")}
                        value="checkedIntern"
                        color="primary"
                      />
                    }
                    label="Intern"
                  />
                </FormGroup>
              </MuiThemeProvider>
            </Grid>
          </Paper>
          <AppBar className={classes.root2} position="static">
            {/* <MuiThemeProvider theme={theme}> */}
            <Tabs
              indicatorColor="none"
              value={tabValue}
              onChange={this.handleChangeTab}
            >
              <Tab label="Team Member Information" />
              <Tab label="Assigned Clients" />
              <Tab label="Member Files" />
            </Tabs>
            {/* </MuiThemeProvider> */}
          </AppBar>
          {tabValue === 0 && (
            <form
              /* className={classes.container} */ noValidate
              autoComplete="off"
            >
              <Paper className={classes.infoRoot} elevation={2}>
                <Grid container justify="center" alignItems="center">
                  <TextField
                    id="standard-select-title"
                    select
                    margin="normal"
                    label="Title"
                    variant="outlined"
                    className={classes.textFieldTop}
                    value={this.state.title}
                    onChange={this.handleChangeValue("title")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                  >
                    {titles.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      required
                      id="standard-firstName"
                      label="First Name"
                      variant="outlined"
                      className={classes.textFieldTop}
                      value={this.state.firstName}
                      onChange={this.handleChangeValue("firstName")}
                      margin="normal"
                    />
                  </MuiThemeProvider>

                  <TextField
                    required
                    id="standard-lastNamename"
                    label="Last Name"
                    variant="outlined"
                    className={classes.textFieldTop}
                    value={this.state.lastName}
                    onChange={this.handleChangeValue("lastName")}
                    margin="normal"
                  />

                  <TextField
                    required
                    id="standard-email"
                    variant="outlined"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChangeValue("email")}
                    margin="normal"
                  />

                  <TextField
                    required
                    id="standard-password-input"
                    variant="outlined"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    value={this.state.currentPassword}
                    onChange={this.handleChangeValue("currentPassword")}
                    //autoComplete="current-password"
                    margin="normal"
                  />

                  <TextField
                    required
                    id="standard-confirmPassword-input"
                    variant="outlined"
                    label="Confirm Password"
                    className={classes.textField}
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChangeValue("confirmPassword")}
                    //autoComplete="current-password"
                    margin="normal"
                  />

                  <TextField
                    id="standard-address"
                    variant="outlined"
                    label="Address"
                    className={classes.textField}
                    value={this.state.address}
                    onChange={this.handleChangeValue("address")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-city-"
                    variant="outlined"
                    label="City"
                    className={classes.textField}
                    value={this.state.city}
                    onChange={this.handleChangeValue("city")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-state"
                    variant="outlined"
                    label="State"
                    className={classes.textField}
                    value={this.state.state}
                    onChange={this.handleChangeValue("state")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-zipCode"
                    variant="outlined"
                    label="Zip Code"
                    className={classes.textField}
                    value={this.state.zipCode}
                    onChange={this.handleChangeValue("zipCode")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-phone"
                    variant="outlined"
                    label="Phone Number"
                    className={classes.textField}
                    value={this.state.phone}
                    onChange={this.handleChangeValue("phone")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-bday"
                    variant="outlined"
                    label="Birthday"
                    className={classes.textField}
                    value={this.state.bday}
                    onChange={this.handleChangeValue("bday")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-npi"
                    variant="outlined"
                    label="NPI Number"
                    className={classes.textField}
                    value={this.state.npi}
                    onChange={this.handleChangeValue("npi")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-primary-location"
                    variant="outlined"
                    label="Primary Location"
                    className={classes.textField}
                    value={this.state.location}
                    onChange={this.handleChangeValue("location")}
                    margin="normal"
                  />

                  <MuiThemeProvider theme={theme2}>
                    <TextField
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      className={classes.textField2}
                      placeholder="Add any additional notes here"
                      fullWidth
                      multiline
                      margin="normal"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </MuiThemeProvider>
                </Grid>
                <Grid container direction="row" justify="flex-end">
                  <Button
                    className={classes.saveButton}
                    size="large"
                    variant="contained"
                  >
                    Save
                  </Button>
                </Grid>
              </Paper>
            </form>
          )}
          {tabValue === 1 && (
            <Grid container justify="center" alignItems="center">
              {/* Assign client button */}
              <Button
                variant="contained"
                onClick={this.handleClickClientOpen}
                className={classes.floatButton}
              >
                <AddIcon />
                Assign Client
              </Button>
              <Dialog
                open={this.state.assignOpen}
                onClose={this.handleClientClose}
              >
                <DialogTitle id="form-dialog-title">Assign Client</DialogTitle>
                <DialogContent>
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      id="standard-select-client"
                      select
                      label="Clients"
                      variant="outlined"
                      margin="normal"
                      className={classes.textField}
                      value={this.state.client}
                      onChange={this.handleChangeValue("client")}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                    >
                      {clientData.map(option => (
                        <MenuItem
                          key={option.value}
                          value={option.client_full_name}
                        >
                          {option.client_full_name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </MuiThemeProvider>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClientClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleClientClose} color="primary">
                    Assign
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          )}
          {tabValue === 1 && <AssignedClientsTable />}
          {tabValue === 2 && <UploadAction />}
          {tabValue === 2 && <FilesTable />}
          )}
        </Container>
      </div>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
