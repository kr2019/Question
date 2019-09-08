import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Documentation from "../Documentation/documentation";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker
} from "@material-ui/pickers";
// putting commmnent to change push comment
import { Switch, Link, Route, withRouter, Redirect } from "react-router-dom";
//test

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
  rootCustWeekDay: {
    display: "flex"
  },
  formControlCustWeekDay: {
    margin: theme.spacing()
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

const attendanceTypes = [
  {
    value: "Present",
    label: "Present"
  },

  {
    value: "Absent",
    label: "Absent"
  },
  {
    value: "Canceled",
    label: "Canceled"
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

const repeatOptions = [
  {
    value: "Daily",
    label: "Daily"
  },

  {
    value: "Weekly",
    label: "Weekly"
  },
  {
    value: "Monthly",
    label: "Monthly"
  },
  {
    value: "Custom",
    label: "Custom"
  }
];

const repeatEndOptions = [
  {
    value: "Never",
    label: "Never"
  },

  {
    value: "After",
    label: "After"
  },
  {
    value: "On Date",
    label: "On Date"
  }
];

const customFreqOptions = [
  {
    value: "Daily",
    label: "Daily"
  },

  {
    value: "Weekly",
    label: "Weekly"
  },
  {
    value: "Monthly",
    label: "Monthly"
  }
];

class TopPanel extends React.Component {
  state = {
    attendance: "Present",
    existingBillType: "Billable",
    existingClientType: "Individual",
    existingClient: "John Smith",
    existingTherapist: "Harry Potter",
    existingLocation: "Main Building",
    existingCategory: "None",
    existingRepeat: "Weekly",
    existingEndRepeat: "On Date",
    existingNumOccurences: "",
    existingCustomFreq: "",
    existingEveryNumDays: "",
    existingEveryNumWeeks: "",
    existingNumMonths: "",
    checkedRepeat: true,
    sun: false,
    mon: false,
    tues: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleDateChangeStart = date => {
    this.setState({ selectedDate: date.format("YYYY-MM-DD HH:mm:ss") });
  };

  handleDateChangeEnd = date => {
    this.setState({ endSelectedDate: date.format("YYYY-MM-DD HH:mm:ss") });
  };

  /*
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };
*/
  /*
  handleSubmit = (user) => {
    saveUser(user)
      .then(() => this.setState(() => ({
        toDashboard: true
      })))
  }
  */
  /*
  setLocation() {
    this.props.history.push("/clients");
  } */

  render() {
    const { classes } = this.props;
    const { therapistData } = this.state;
    /*
    if (this.state.toDashboard === true) {
        return <Redirect to='/dashboard' />
      }
  */
    /*

    const { navigate } = this.state;

    // here is the important part
    if (navigate) {
      return <Redirect to="/clients" push={true} />;
    }
    */

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Documentation />
        </Grid>
        <TextField
          required
          id="standard-select-client"
          select
          label="Attendance"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          value={this.state.attendance}
          onChange={this.handleChange("attendance")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
        >
          {attendanceTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="standard-select-client"
          select
          label="Bill Type"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          value={this.state.existingBillType}
          onChange={this.handleChange("exitingBillType")}
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
          id="standard-select-client"
          select
          label="Client Type"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          value={this.state.existingClientType}
          onChange={this.handleChange("existingClientType")}
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
          id="standard-select-client"
          select
          label="Client"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          value={this.state.existingClient}
          onChange={this.handleChange("existingClient")}
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
          id="standard-select-client"
          select
          label="Therapist"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          value={this.state.existingTherapist}
          onChange={this.handleChange("existingTherapist")}
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
        <Grid direction="row">
          <TextField
            id="standard-existingLocation"
            label="Location"
            variant="outlined"
            className={classes.textField2}
            value={this.state.existingLocation}
            onChange={this.handleChange("existingLocation")}
            margin="normal"
          />
          <TextField
            id="standard-select-client"
            select
            label="Category"
            variant="outlined"
            margin="normal"
            className={classes.textField2}
            value={this.state.existingCategory}
            onChange={this.handleChange("existingCategory")}
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
        </Grid>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid direction="row">
            <DatePicker
              inputVariant="outlined"
              className={classes.textField2}
              margin="normal"
              id="mui-pickers-date"
              label="Start Date"
              value={this.state.selectedDateStart}
              onChange={this.handleDateChangeStart}
            />
            <TimePicker
              inputVariant="outlined"
              className={classes.textField2}
              margin="normal"
              id="mui-pickers-time"
              label="Start Time"
              value={this.state.selectedTimeStart}
              onChange={this.handleTimeChangeStart}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid direction="row">
            <DatePicker
              inputVariant="outlined"
              margin="normal"
              className={classes.textField2}
              id="mui-pickers-date"
              label="End Date"
              value={this.state.selectedDateEnd}
              onChange={this.handleDateChangeEnd}
            />
            <TimePicker
              inputVariant="outlined"
              className={classes.textField2}
              margin="normal"
              id="mui-pickers-time"
              label="End Time"
              value={this.state.selectedTimeEnd}
              onChange={this.handleTimeChangeEnd}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedRepeat}
                onChange={this.handleChangeCheckBox("checkedRepeat")}
                value="checkedRepeat"
                color="primary"
              />
            }
            label="Repeat"
          />
        </FormGroup>
        <Grid direction="row">
          <TextField
            id="standard-select-client"
            select
            label="Repeats"
            variant="outlined"
            margin="normal"
            className={classes.textField}
            value={this.state.existingRepeat}
            onChange={this.handleChangeRepeat("existingRepeat")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {repeatOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid direction="row">
          <TextField
            id="standard-select-client"
            select
            label="End Repeat"
            variant="outlined"
            margin="normal"
            className={classes.textField2}
            value={this.state.existingEndRepeat}
            onChange={this.handleChangeEndRepeat("existingEndRepeat")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {repeatEndOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-newNumOccurences"
            label="Occurences"
            variant="outlined"
            className={classes.textField2}
            value={this.state.newNumOccurences}
            onChange={this.handleChange("existingNumOccurences")}
            margin="normal"
          />
        </Grid>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid direction="row">
            <DatePicker
              inputVariant="outlined"
              className={classes.textField2}
              margin="normal"
              id="mui-pickers-date"
              label="End On"
              value={this.state.selectedDateOccurenceEnd}
              onChange={this.handleDateOccurenceChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <TextField
          id="standard-select-client"
          select
          label="Custom Frequency"
          variant="outlined"
          margin="normal"
          className={classes.textField}
          value={this.state.existingCustomFreq}
          onChange={this.handleChangeCustomFreq("existingCustomFreq")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
        >
          {customFreqOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-newNumOccurences"
          label="Every Number of Days"
          variant="outlined"
          className={classes.textField2}
          value={this.state.existingEveryNumDays}
          onChange={this.handleChange("existingEveryNumDays")}
          margin="normal"
        />
        <TextField
          id="standard-newNumOccurences"
          label="Every Number of Weeks"
          variant="outlined"
          className={classes.textField2}
          value={this.state.existingEveryNumWeeks}
          onChange={this.handleChange("existingEveryNumWeeks")}
          margin="normal"
        />
        <FormControlLabel
          component="fieldset"
          className={classes.formControlCustWeekDay}
        >
          <FormLabel component="legend">Every</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={sun}
                  onChange={handleChangeCustWeekDay("sun")}
                  value="sun"
                />
              }
              label="Su"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.mon}
                  onChange={handleChangeCustWeekDay("mon")}
                  value="mon"
                />
              }
              label="M"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.tues}
                  onChange={handleChangeCustWeekDay("tues")}
                  value="tues"
                />
              }
              label="T"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.wed}
                  onChange={handleChangeCustWeekDay("wed")}
                  value="wed"
                />
              }
              label="W"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.thu}
                  onChange={handleChangeCustWeekDay("thu")}
                  value="thu"
                />
              }
              label="Th"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.fri}
                  onChange={handleChangeCustWeekDay("fri")}
                  value="fri"
                />
              }
              label="F"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sthis.state.at}
                  onChange={handleChangeCustWeekDay("sat")}
                  value="sat"
                />
              }
              label="Sa"
            />
          </FormGroup>
    
        <TextField
          id="standard-newNumOccurences"
          label="Every Number of Months"
          variant="outlined"
          className={classes.textField2}
          value={values.existingNumMonths}
          onChange={handleChange("existingNumMonths")}
          margin="normal"
        />
        <Grid container direction="row" justify="center">
          <IconButton>
            <DeleteForeverIcon color="secondary" fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
