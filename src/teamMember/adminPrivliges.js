import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: 878,
    marginLeft: theme.spacing.unit * 22
  }
}));

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    invoice: true,
    allCalendar: true,
    payment: true,
    editOtherSched: true,
    viewOtherSched: true,
    editOtherInfo: true,
    viewOtherInfo: true,
    addClient: true,
    recordAttendance: true,
    viewNote: true,
    viewClient: true,
    kpis: true,
    viewReport: true,
    viewCalendar: true,
    viewOwnClient: true
  });

  const classes = useStyles();

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Paper className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              disabled
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
