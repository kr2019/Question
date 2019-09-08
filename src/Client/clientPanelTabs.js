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

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import ClientAvatar from "./clientAvatarTest";
import Blue from "@material-ui/core/colors/blue";
import Container from "@material-ui/core/Container";

import axios from "axios";

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
    // paddingLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 15,
    // marginLeft: theme.spacing.unit * 22,
    //marginRight: theme.spacing.unit * 22,
    align: "center",
    width: "100%",
    height: "120"
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
    color: green[300],
    "&$colorChecked": {
      color: green[500],
      "& + $colorBar": {
        backgroundColor: green[500]
      }
    }
  },
  colorBar: green[500],
  colorChecked: green[500],

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    //marginBottom: theme.spacing.unit,
    width: 300
  },

  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 200
  },

  textField3: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 200
  },

  textFieldSession: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing(6),
    width: 300
  },

  textFieldNotes: {
    //marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
    //marginBottom: theme.spacing(2),
    width: 938
  },

  textFieldAlign: {
    marginRight: theme.spacing(50),
    width: 300
    // marginBottom: theme.spacing(5)
  },

  textFieldTest: {
    marginRight: theme.spacing(79),
    width: 300
  },

  textFieldGoals: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },

  textFieldGoals2: {
    marginLeft: theme.spacing.unit * 8,
    //marginRight: theme.spacing.unit,
    // marginTop: theme.spacing.unit,
    width: 500
  },

  menu: {
    width: 200
  },

  checked: {},

  root2: {
    //flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    //marginLeft: theme.spacing.unit * 22,
    //marginRight: theme.spacing.unit * 22,
    //marginTop: theme.spacing.unit * 22,
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Blue[800]
  },

  infoRoot: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },

  saveButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b2dfdb" }
  }
});

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

const sessionTypes = [
  {
    value: "Lessons",
    label: "Lessons"
  },

  {
    value: "Therapy",
    label: "Therapy"
  }
];

const paymentTypes = [
  {
    value: "Card",
    label: "Card"
  },

  {
    value: "Cash",
    label: "Cash"
  },

  {
    value: "Check",
    label: "Check"
  }
];

const cardTypes = [
  {
    value: "American Express",
    label: "American Express"
  },

  {
    value: "Discover",
    label: "Discover"
  },

  {
    value: "MasterCard",
    label: "MasterCard"
  },
  {
    value: "Visa",
    label: "Visa"
  }
];

class TopPanel extends React.Component {
  state = {
    clientData: [],
    therapistData: [],
    selectedIndex: null,
    checkedA: true,
    client: "Jaren Jones",
    open: false,
    cost: "",
    length: "",
    clientType: "Individual",
    tabValue: 0,
    // CLIENT INFO TAB
    clientFirstName: "Jaren",
    clientFacility: null,
    clientLastName: "Jones",
    clientEmail: "jjones@mail.com",
    clientTitle: "Mr.",
    clientTherapist: "Harry Potter",
    sessionLength: "30",
    sessionCost: "$40",
    sessionType: "Therapy",
    clientCurrentPassword: "test123",
    clientConfirmPassword: "test123",
    clientPhone: "123-456-1111",
    clientStreetAddress: "123 Maple Street",
    clientBday: "2/20/1998",
    clientCity: "Plano",
    clientZipCode: "75023",
    clientState: "TX",
    clientNotes: "",
    multiline: "Controlled",
    // CONTACT TAB
    contactFirstName: "Jaren",
    contactLastName: "Jones",
    contactEmail: "jjones@mail.com",
    contactAddress: "123 Maple Street",
    contactTitle: "Mr.",
    contactPhone: "123-456-1111",
    contactCity: "Plano",
    contactState: "TX",
    contactZip: "75023",
    // multiline: "Controlled"
    // PAYOR TAB
    billingFirstName: "Jack",
    billingLastName: "Jones",
    nameOnCard: "Jack A. Jones",
    cardNum: "111122223333",
    payorEmail: "jackjones@mail.com",
    paymentType: "Card",
    billingPhone: "123-456-1111",
    billingAddress: "123 Maple Street",
    billingCity: "Plano",
    billingZip: "75023",
    billingState: "TX",
    cvv: "000",
    expDate: "03/17",
    cardType: "Visa",
    sameAsContact: false,
    // GOALS TAB
    goal1: "This is my goal",
    obj1_1: "This is my objective",
    obj1_2: "This is my second one",
    goal2: "",
    obj2_1: ""
  };

  handleChangeChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  /* change of client dropdown */
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeTabs = (event, tabValue) => {
    this.setState({ tabValue });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/gettherapists")
      .then(response => {
        console.log("Got therapistdata data!");
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

  render() {
    const { classes } = this.props;

    const { tabValue, clientData, therapistData } = this.state;

    return (
      <div>
        <Container maxWidth="lg">
          {/* Avatar */}
          <Grid container justify="center" alignItems="center">
            <ClientAvatar />
          </Grid>
          <Paper className={classes.root} elevation={2}>
            <Grid container row justify="flex-start">
              <MuiThemeProvider theme={theme}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.checkedA}
                        onChange={this.handleChangeChecked("checkedA")}
                        value="checkedA"
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
            </Grid>

            {/* client drop down */}
            <Grid container row justify="space-between">
              <TextField
                required
                id="newClient"
                select
                label="Client"
                className={classes.textField}
                value={this.state.client}
                onChange={this.handleChange("client")}
                //helperText="Please select your currency"
                margin="normal"
                variant="outlined"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {clientData.map(option => (
                  <MenuItem key={option.value} value={option.client_full_name}>
                    {option.client_full_name}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="standard-select-member"
                select
                margin="normal"
                label="Client Type"
                variant="outlined"
                className={classes.textField2}
                value={this.state.clientType}
                onChange={this.handleChange("clientType")}
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
            </Grid>
          </Paper>
          <AppBar className={classes.root2} position="static">
            <Tabs
              indicatorColor="none"
              value={tabValue}
              onChange={this.handleChangeTabs}
            >
              <Tab label="Client Information" />
              <Tab label="Contact Information" />
              <Tab label="Payor Information" />
            </Tabs>
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
                    label="Title"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.clientTitle}
                    margin="normal"
                    onChange={this.handleChange("clientTitle")}
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
                      className={classes.textField}
                      value={this.state.clientFirstName}
                      onChange={this.handleChange("clientFirstName")}
                      margin="normal"
                    />
                  </MuiThemeProvider>
                  <TextField
                    required
                    id="standard-lastNamename"
                    label="Last Name"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.clientLastName}
                    onChange={this.handleChange("clientLastName")}
                    margin="normal"
                  />
                  <TextField
                    required
                    id="standard-email"
                    variant="outlined"
                    label="Email"
                    className={classes.textField}
                    value={this.state.clientEmail}
                    onChange={this.handleChange("clientEmail")}
                    margin="normal"
                  />
                  <TextField
                    required
                    id="standard-password-input"
                    variant="outlined"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    value={this.state.clientCurrentPassword}
                    onChange={this.handleChange("clientCurrentPassword")}
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
                    value={this.state.clientConfirmPassword}
                    onChange={this.handleChange("confirmPassword")}
                    //autoComplete="current-password"
                    margin="normal"
                  />

                  <TextField
                    id="standard-address"
                    variant="outlined"
                    label="Address"
                    className={classes.textField}
                    value={this.state.clientStreetAddress}
                    onChange={this.handleChange("clientAddress")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-city-"
                    variant="outlined"
                    label="City"
                    className={classes.textField}
                    value={this.state.clientCity}
                    onChange={this.handleChange("clientCity")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-state"
                    variant="outlined"
                    label="State"
                    className={classes.textField}
                    value={this.state.clientState}
                    onChange={this.handleChange("clientState")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-zipCode"
                    variant="outlined"
                    label="Zip Code"
                    className={classes.textField}
                    value={this.state.clientZipCode}
                    onChange={this.handleChange("clientZipCode")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-phone"
                    variant="outlined"
                    label="Phone Number"
                    className={classes.textField}
                    value={this.state.clientPhone}
                    onChange={this.handleChange("clientPhone")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-bday"
                    variant="outlined"
                    label="Birthday"
                    className={classes.textField}
                    value={this.state.clientBday}
                    onChange={this.handleChange("clientBday")}
                    margin="normal"
                  />

                  {/* insert facility name here */}

                  {this.state.clientType === "Facility" ? (
                    <TextField
                      required
                      id="standard-facility-name"
                      label="Facility Name"
                      variant="outlined"
                      className={classes.textFieldTest}
                      value={this.state.clientFacility}
                      onChange={this.handleChange("clientFacility")}
                      margin="normal"
                    />
                  ) : null}
                  <Grid container row justify="center" alignItems="center">
                    <TextField
                      id="standard-select-sessionType"
                      select
                      label="Session Type"
                      variant="outlined"
                      margin="normal"
                      className={classes.textFieldSession}
                      value={this.state.sessionType}
                      onChange={this.handleChange("sessionType")}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                    >
                      {sessionTypes.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="standard-cost"
                      label="Session Cost (dollars)"
                      variant="outlined"
                      className={classes.textFieldSession}
                      value={this.state.sessionCost}
                      onChange={this.handleChange("sessionCost")}
                      margin="normal"
                    />
                    <TextField
                      id="standard-length"
                      label="Session Length (minutes)"
                      variant="outlined"
                      className={classes.textFieldSession}
                      value={this.state.sessionLength}
                      onChange={this.handleChange("sessionLength")}
                      margin="normal"
                    />
                    <Grid container justify="center" alignItems="center">
                      <TextField
                        id="standard-select-therapist"
                        select
                        label="Therapist"
                        variant="outlined"
                        margin="normal"
                        className={classes.textFieldTest}
                        value={this.state.clientTherapist}
                        onChange={this.handleChange("clientTherapist")}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu
                          }
                        }}
                      >
                        {therapistData.map(option => (
                          <MenuItem
                            key={option.value}
                            value={option.member_full_name}
                          >
                            {option.member_full_name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid container row justify="center">
                    <MuiThemeProvider theme={theme}>
                      <TextField
                        id="standard-full-width"
                        //label="Additional Notes"
                        style={{ margin: 8 }}
                        className={classes.textFieldNotes}
                        value={this.state.clientNotes}
                        onChange={this.handleChange("clientNotes")}
                        placeholder="Add any additional notes here"
                        //fullWidth
                        multiline
                        margin="normal"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </MuiThemeProvider>
                  </Grid>
                  <Grid container justify="flex-end">
                    <Button
                      className={classes.saveButton}
                      size="large"
                      variant="contained"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )

          /* <ClientInfo />*/
          }
          {tabValue === 1 && (
            <form className={classes.container} noValidate autoComplete="off">
              <Paper className={classes.infoRoot} elevation={2}>
                {/*  Contact 1 */}
                <Grid container row justify="center" alignItems="center">
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      id="standard-select-contactTitle"
                      select
                      label="Title"
                      variant="outlined"
                      margin="normal"
                      className={classes.textField}
                      value={this.state.contactTitle}
                      onChange={this.handleChange("contactTitle")}
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
                  </MuiThemeProvider>
                  <TextField
                    required
                    id="standard-contactFirstName"
                    label="First Name"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.contactFirstName}
                    onChange={this.handleChange("contactFirstName")}
                    margin="normal"
                  />
                  <TextField
                    required
                    id="standard-lastNamename"
                    label="Last Name"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.contactLastName}
                    onChange={this.handleChange("contactLastName")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-contactAddress"
                    variant="outlined"
                    label="Street Address"
                    className={classes.textField}
                    value={this.state.contactAddress}
                    onChange={this.handleChange("contactAddress")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-contactCity-"
                    variant="outlined"
                    label="City"
                    className={classes.textField}
                    value={this.state.contactCity}
                    onChange={this.handleChange("contactCity")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-state"
                    variant="outlined"
                    label="State"
                    className={classes.textField}
                    value={this.state.contactState}
                    onChange={this.handleChange("contactState")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-contactZip"
                    variant="outlined"
                    label="Zip Code"
                    className={classes.textField}
                    value={this.state.contactZip}
                    onChange={this.handleChange("contactZip")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-contactPhone"
                    variant="outlined"
                    label="Phone Number"
                    className={classes.textField}
                    value={this.state.contactPhone}
                    onChange={this.handleChange("contactPhone")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-contactPhone"
                    variant="outlined"
                    label="Secondary Phone Number"
                    className={classes.textField}
                    value={this.state.contact2ndPhone}
                    onChange={this.handleChange("contact2ndPhone")}
                    margin="normal"
                  />
                  <Grid container row justify="center">
                    <TextField
                      required
                      id="standard-contactEmail"
                      variant="outlined"
                      label="Email"
                      className={classes.textFieldAlign}
                      value={this.state.contactEmail}
                      onChange={this.handleChange("contactEmail")}
                      margin="normal"
                    />
                    <MuiThemeProvider theme={theme}>
                      <FormGroup className={classes.alignCheck} row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="primary"
                              checked={this.state.contactCheckedRecEmails}
                              onChange={this.handleChangeChecked(
                                "contactCheckedRecEmails"
                              )}
                              classes={{
                                root: classes.checkedRoot,
                                checked: classes.checked
                              }}
                              value="contactCheckedRecEmails"
                            />
                          }
                          label="Receive email notifcations"
                        />
                      </FormGroup>
                    </MuiThemeProvider>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="space-between">
                  {/*
            <Button
              size="medium"
              variant="contained"
              className={classes.button}
            >
              Add Additional
            </Button>
            */}
                  <Grid container justify="flex-end">
                    <Button
                      className={classes.saveButton}
                      size="large"
                      variant="contained"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
          {tabValue === 2 && (
            <form className={classes.container} noValidate autoComplete="off">
              <Paper className={classes.infoRoot} elevation={2}>
                <Grid container justify="center" alignItems="center">
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      required
                      id="billingFirstName"
                      label="First Name"
                      variant="outlined"
                      className={classes.textField}
                      value={this.state.billingFirstName}
                      onChange={this.handleChange("billingFirstName")}
                      margin="normal"
                    />
                  </MuiThemeProvider>
                  <TextField
                    required
                    id="billingLastName"
                    label="Last Name"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.billingLastName}
                    onChange={this.handleChange("billingLastName")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-select-paymentType"
                    select
                    label="Payment Type"
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.paymentType}
                    onChange={this.handleChange("paymentType")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                  >
                    {paymentTypes.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-select-cardType"
                    select
                    label="Card Type"
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.cardType}
                    onChange={this.handleChange("cardType")}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu
                      }
                    }}
                  >
                    {cardTypes.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    required
                    id="standard-nameOnCard"
                    label="Name on Card"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.nameOnCard}
                    onChange={this.handleChange("nameOnCard")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-billingAddress"
                    variant="outlined"
                    label="Billing Street Address"
                    className={classes.textField}
                    value={this.state.billingAddress}
                    onChange={this.handleChange("billingAddress")}
                    margin="normal"
                  />

                  <TextField
                    required
                    id="standard-cardNum"
                    label="Card Number"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.cardNum}
                    onChange={this.handleChange("cardNum")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-billingCity-"
                    variant="outlined"
                    label="City"
                    className={classes.textField}
                    value={this.state.billingCity}
                    onChange={this.handleChange("billingCity")}
                    margin="normal"
                  />

                  <TextField
                    required
                    id="standard-payorEmail"
                    variant="outlined"
                    label="Email"
                    className={classes.textField}
                    value={this.state.payorEmail}
                    onChange={this.handleChange("payorEmail")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-expDate"
                    variant="outlined"
                    label="Expiration Date"
                    className={classes.textField}
                    value={this.state.expDate}
                    onChange={this.handleChange("expDate")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-state"
                    variant="outlined"
                    label="State"
                    className={classes.textField}
                    value={this.state.billingState}
                    onChange={this.handleChange("billingState")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-phone"
                    variant="outlined"
                    label="Phone Number"
                    className={classes.textField}
                    value={this.state.billingPhone}
                    onChange={this.handleChange("billingPhone")}
                    margin="normal"
                  />

                  <TextField
                    required
                    id="standard-cvv"
                    label="CVV"
                    type="password"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.cvv}
                    onChange={this.handleChange("cvv")}
                    margin="normal"
                  />

                  <TextField
                    id="standard-billingZip"
                    variant="outlined"
                    label="Zip Code"
                    className={classes.textField}
                    value={this.state.billingZip}
                    onChange={this.handleChange("billingZip")}
                    margin="normal"
                  />
                </Grid>
                <Grid container justify="flex-end">
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
        </Container>
      </div>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
