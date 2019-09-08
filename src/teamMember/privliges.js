import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },

  marg: {
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(1)
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
    width: 300
  },

  menu: {
    width: 200
  },
  root: {
    width: "100%",
    //marginLeft: theme.spacing.unit * 22,
    paddingTop: theme.spacing.unit,
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing.unit * 2
  },

  saveButton: {
    marginRight: theme.spacing(2)
  },

  container2: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 850
  },

  menu2: {
    width: 200
  },
  button: {
    width: 1020,
    paddingBottom: theme.spacing.unit * 2
  },
  title: {
    align: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 20
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

const roles = [
  {
    value: "Therapist",
    label: "Therapist"
  },

  {
    value: "Admin Assistant",
    label: "Admin Assistant"
  }
];

class TopPanel extends React.Component {
  state = {
    checkedActive: false,
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    title: "",
    currentPassword: "",
    confirmPassword: "",
    phone: "",
    address: "",
    primaryLocation: "",
    npi: "",
    city: "",
    zipCode: "",
    notes: "",
    multiline: "Controlled",
    // privliges
    checkedAdmin: false,
    checkedThera: true,
    checkedIntern: false,
    invoice: false,
    allCalendar: false,
    payment: true,
    editOtherSched: false,
    viewOtherSched: false,
    editOtherInfo: false,
    viewOtherInfo: false,
    addClient: true,
    recordAttendance: true,
    viewNote: true,
    viewClient: false,
    kpis: true,
    viewReport: false,
    viewCalendar: true,
    viewOwnClient: true
  };
  /*
  componentDidMount() {
    axios
      .get("http://localhost:5000/members")
      .then(response => {
        console.log("Got member data!");
        console.log(response.data);
        this.setState({
          memberData: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
      console.log("Client interval set!");
    }
  }
*/
  // multiple get method

  componentDidMount() {
    axios
      .get("http://localhost:5000/members")
      .then(response => {
        console.log("Got member data!");
        console.log(response.data);
        this.setState({
          memberData: response.data
        });
      }) /* multiple get
      .then(response2 => {
        return axios
          .get("http://localhost:5000/allclients") // using response.data
          .then(response2 => {
            console.log("Got client data!");
            console.log(response2.data);
            this.setState({
              clientData: response2.data
            });
          });
      }) */
      .catch(function(error) {
        console.log(error);
      });

    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
      console.log("Data interval set!");
    }
  }

  /* async request style

 componentDidMount() {
    axios
      .get("http://localhost:5000/members")
      .then(response => {
        console.log("Got member data!");
        console.log(response.data);
        this.setState({
          memberData: response.data
        });
      })
      .then(async () => {
        const response2 = await axios
          .get("http://localhost:5000/allclients") // using response.data
          ;
        console.log("Got client data!");
        console.log(response2.data);
        this.setState({
          clientData: response2.data
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

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from team data!");
    }
  }
	
  */

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from data!");
    }
  }

  onSubmit() {
    //experiment keeping preventDefault
    //e.preventDefault();

    const memberObj = {
      //title: this.state.title,
      checkedActive: this.state.checkedActive,
      checkedAdmin: this.state.checkedAdmin,
      checkedThera: this.state.checkedThera,
      checkedIntern: this.state.checkedIntern,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      role: this.state.role,
      title: this.state.title,
      currentPassword: this.state.currentPassword,
      confirmPassword: this.state.confirmPassword,
      phone: this.state.phone,
      address: this.state.address,
      primaryLocation: this.state.primaryLocation,
      npi: this.state.npi,
      city: this.state.city,
      zipCode: this.state.zipCode,
      notes: this.state.notes
    };
    /* 
    const clientObj = {
      client: this.state.client,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      sessionCost: this.state.sessionCost,
      sessionLength: this.state.sessionLength,
      sessionType: this.state.sessionType
    };
    */
    axios
      .post("http://localhost:5000/members/registermember", memberObj)
      // .then(res => console.log(res.data));
      /* this will clear everything after saving+closing */
      .then(response => {
        this.setState({
          memberObj
        });
      });
    /* multiple post 
      .then(post2 => {
        return axios
          .post("http://localhost:5000/assignClients/assignclient1", clientObj) // using response.data
          .then(post2 => {
            this.setState({
              clientObj
            });
          });
      });
      */
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange3 = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  /* 
  reloadPage() {
    // if (this.state.location !== prevState.location) {
    window.location.reload();
    console.log("Refresh!");
  }
*/
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg">
        <form className={classes.container} noValidate autoComplete="off">
          <Paper className={classes.root} elevation={1}>
            <Typography className={classes.title} align="center" variant="h6">
              New Team Member Information
            </Typography>
            <Grid container row justify="space-between">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedActive}
                      onChange={this.handleChange3("checkedActive")}
                      value="checkedActive"
                      //marginLeft="theme.spacing.unit * 20"
                      className={classes.marg}
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                  }
                  label="Active"
                />
              </FormGroup>

              {/*
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedAdmin}
                    onChange={this.handleChange3("checkedAdmin")}
                    value="checkedAdmin"
                    color="default"
                  />
                }
                label="Administrator"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedThera}
                    onChange={this.handleChange3("checkedThera")}
                    value="checkedThera"
                    color="default"
                  />
                }
                label="Therapist"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedIntern}
                    onChange={this.handleChange3("checkedIntern")}
                    value="checkedIntern"
                    color="default"
                  />
                }
                label="Intern"
              />
            </FormGroup>
            */}
              <TextField
                id="standard-select-role"
                select
                label="Role"
                variant="outlined"
                className={classes.textField}
                value={this.state.role}
                onChange={this.handleChange("role")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {roles.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid container justify="center" alignItems="center">
              <TextField
                id="standard-select-title"
                select
                label="Title"
                variant="outlined"
                className={classes.textField}
                value={this.state.title}
                onChange={this.handleChange("title")}
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

              <Grid direction="column">
                <TextField
                  required
                  id="standard-firstName"
                  label="First Name"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.firstName}
                  onChange={this.handleChange("firstName")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-lastNamename"
                  label="Last Name"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.lastName}
                  onChange={this.handleChange("lastName")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-email"
                  variant="outlined"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-password-input"
                  variant="outlined"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  value={this.state.currentPassword}
                  onChange={this.handleChange("currentPassword")}
                  //autoComplete="current-password"
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-confirmPassword-input"
                  variant="outlined"
                  label="Confirm Password"
                  className={classes.textField}
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange("confirmPassword")}
                  //autoComplete="current-password"
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-phone"
                  variant="outlined"
                  label="Phone Number"
                  className={classes.textField}
                  value={this.state.phone}
                  onChange={this.handleChange("phone")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-address"
                  variant="outlined"
                  label="Address"
                  className={classes.textField}
                  value={this.state.address}
                  onChange={this.handleChange("address")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-city-"
                  variant="outlined"
                  label="City"
                  className={classes.textField}
                  value={this.state.city}
                  onChange={this.handleChange("city")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-zipCode"
                  variant="outlined"
                  label="Zip Code"
                  className={classes.textField}
                  value={this.state.zipCode}
                  onChange={this.handleChange("zipCode")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-npi"
                  variant="outlined"
                  label="NPI Number"
                  className={classes.textField}
                  value={this.state.npi}
                  onChange={this.handleChange("npi")}
                  margin="normal"
                />
              </Grid>
              <Grid direction="column">
                <TextField
                  id="standard-primary-location"
                  variant="outlined"
                  label="Primary Location"
                  className={classes.textField}
                  value={this.state.primaryLocation}
                  onChange={this.handleChange("primaryLocation")}
                  margin="normal"
                />
              </Grid>

              <TextField
                id="standard-full-width"
                label="Additional Notes"
                value={this.state.notes}
                style={{ margin: 8 }}
                className={classes.textField2}
                onChange={this.handleChange("notes")}
                placeholder="Add any additional notes here"
                fullWidth
                multiline
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Container>
              <Typography className={classes.title} align="center" variant="h6">
                Privliges
              </Typography>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedAdmin}
                        onChange={this.handleChange3("checkedAdmin")}
                        value="checkedAdmin"
                        color="default"
                      />
                    }
                    label="Administrator"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedThera}
                        onChange={this.handleChange3("checkedThera")}
                        value="checkedThera"
                        color="default"
                      />
                    }
                    label="Therapist"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedIntern}
                        onChange={this.handleChange3("checkedIntern")}
                        value="checkedIntern"
                        color="default"
                      />
                    }
                    label="Intern"
                  />
                </FormGroup>
              </Grid>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.invoice}
                      onChange={this.handleChange3("invoice")}
                      value="invoice"
                    />
                  }
                  label="Invoices/Billing"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.allCalendar}
                      onChange={this.handleChange3("allCalendar")}
                      value="allCalendar"
                    />
                  }
                  label="Calendar of everyone"
                />
                <FormControlLabel
                  control={
                    <Switch
                      disabled
                      checked={this.state.payment}
                      onChange={this.handleChange3("payment")}
                      value="payment"
                    />
                  }
                  label="Take payment"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.editOtherSched}
                      onChange={this.handleChange3("editOtherSched")}
                      value="editOtherSched"
                    />
                  }
                  label="Edit other therapist schedule"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.viewOtherSched}
                      onChange={this.handleChange3("viewOtherSched")}
                      value="viewOtherSched"
                    />
                  }
                  label="View other therapist schedule"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.editOtherInfo}
                      onChange={this.handleChange3("editOtherInfo")}
                      value="editOtherInfo"
                    />
                  }
                  label="Edit other therapist/client info"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.viewOtherInfo}
                      onChange={this.handleChange3("viewOtherInfo")}
                      value="viewOtherInfo"
                    />
                  }
                  label="View other therapist/client info"
                />
                <FormControlLabel
                  control={
                    <Switch
                      disabled
                      checked={this.state.addClient}
                      onChange={this.handleChange3("addClient")}
                      value="addClient"
                    />
                  }
                  label="Add client"
                />
                <FormControlLabel
                  control={
                    <Switch
                      disabled
                      checked={this.state.recordAttendance}
                      onChange={this.handleChange3("recordAttendance")}
                      value="recordAttendance"
                    />
                  }
                  label="Record Attendance"
                />
                <FormControlLabel
                  control={
                    <Switch
                      disabled
                      checked={this.state.viewNote}
                      onChange={this.handleChange3("viewNote")}
                      value="viewNote"
                    />
                  }
                  label="View note history"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.viewClient}
                      onChange={this.handleChange3("viewClient")}
                      value="viewClient"
                    />
                  }
                  label="View other clients vs. own clients"
                />
                <FormControlLabel
                  control={
                    <Switch
                      disabled
                      checked={this.state.kpis}
                      onChange={this.handleChange3("kpis")}
                      value="kpis"
                    />
                  }
                  label="KPIs"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.viewReport}
                      onChange={this.handleChange3("viewReport")}
                      value="jason"
                    />
                  }
                  label="View/create reports"
                />
                <FormControlLabel
                  control={
                    <Switch
                      disabled
                      checked={this.state.viewCalendar}
                      onChange={this.handleChange3("viewCalendar")}
                      value="viewCalendar"
                    />
                  }
                  label="View own calendar"
                />
                <FormControlLabel
                  control={
                    <Switch
                      disabled
                      checked={this.state.viewOwnClient}
                      onChange={this.handleChange3("viewOwnClient")}
                      value="viewOwnClient"
                    />
                  }
                  label="View own clients"
                />
              </FormGroup>
            </Container>

            <Grid container direction="row" justify="flex-end">
              <Button
                className={classes.saveButton}
                size="large"
                variant="contained"
                onClick={() => {
                  this.onSubmit(
                    this.state.checkedActive,
                    this.state.checkedAdmin,
                    this.state.checkedThera,
                    this.state.checkedIntern,
                    this.state.firstName,
                    this.state.lastName,
                    this.state.role,
                    this.state.email,
                    this.state.title,
                    this.state.currentPassword,
                    this.state.confirmPassword,
                    this.state.phone,
                    this.state.address,
                    this.state.primaryLocation,
                    this.state.npi,
                    this.state.city,
                    this.state.zipCode,
                    this.state.notes
                    // client
                    /*
                    this.state.client,
                    this.state.sessionCost,
                    this.state.sessionLength,
                    this.state.sessionType
                    */
                  );
                  //this.reloadPage();
                }}
              >
                Save
              </Button>
            </Grid>
            {/* Assign client button */}
            {/*
            <Grid container direction="row" justify="center">
              <Button
                className={classes.saveButton}
                size="large"
                variant="contained"
              >
                <AddIcon className={classes.icon} />
                Assign Client
              </Button>
            </Grid>
            */}
          </Paper>
        </form>
      </Container>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
