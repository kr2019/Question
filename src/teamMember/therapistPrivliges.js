import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "100%"
    // marginLeft: theme.spacing.unit * 22
  }
}));

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
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
  });

  const classes = useStyles();

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleChange3 = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  return (
    <Paper className={classes.root}>
      <Grid container direction="row" justify="flex-end" alignItems="center">
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
              checked={state.invoice}
              onChange={handleChange("invoice")}
              value="invoice"
            />
          }
          label="Invoices/Billing"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.allCalendar}
              onChange={handleChange("allCalendar")}
              value="allCalendar"
            />
          }
          label="Calendar of everyone"
        />
        <FormControlLabel
          control={
            <Switch
              disabled
              checked={state.payment}
              onChange={handleChange("payment")}
              value="payment"
            />
          }
          label="Take payment"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.editOtherSched}
              onChange={handleChange("editOtherSched")}
              value="editOtherSched"
            />
          }
          label="Edit other therapist schedule"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.viewOtherSched}
              onChange={handleChange("viewOtherSched")}
              value="viewOtherSched"
            />
          }
          label="View other therapist schedule"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.editOtherInfo}
              onChange={handleChange("editOtherInfo")}
              value="editOtherInfo"
            />
          }
          label="Edit other therapist/client info"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.viewOtherInfo}
              onChange={handleChange("viewOtherInfo")}
              value="viewOtherInfo"
            />
          }
          label="View other therapist/client info"
        />
        <FormControlLabel
          control={
            <Switch
              disabled
              checked={state.addClient}
              onChange={handleChange("addClient")}
              value="addClient"
            />
          }
          label="Add client"
        />
        <FormControlLabel
          control={
            <Switch
              disabled
              checked={state.recordAttendance}
              onChange={handleChange("recordAttendance")}
              value="recordAttendance"
            />
          }
          label="Record Attendance"
        />
        <FormControlLabel
          control={
            <Switch
              disabled
              checked={state.viewNote}
              onChange={handleChange("viewNote")}
              value="viewNote"
            />
          }
          label="View note history"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.viewClient}
              onChange={handleChange("viewClient")}
              value="viewClient"
            />
          }
          label="View other clients vs. own clients"
        />
        <FormControlLabel
          control={
            <Switch
              disabled
              checked={state.kpis}
              onChange={handleChange("kpis")}
              value="kpis"
            />
          }
          label="KPIs"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.viewReport}
              onChange={handleChange("viewReport")}
              value="jason"
            />
          }
          label="View/create reports"
        />
        <FormControlLabel
          control={
            <Switch
              disabled
              checked={state.viewCalendar}
              onChange={handleChange("viewCalendar")}
              value="viewCalendar"
            />
          }
          label="View own calendar"
        />
        <FormControlLabel
          control={
            <Switch
              disabled
              checked={state.viewOwnClient}
              onChange={handleChange("viewOwnClient")}
              value="viewOwnClient"
            />
          }
          label="View own clients"
        />
      </FormGroup>
    </Paper>
  );
}
