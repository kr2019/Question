//import "date-fns";
import "moment";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";

const useStyles = makeStyles({
  grid: {
    width: "40%"
  }
});
//test

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedTimeStart, setSelectedTimeStart] = React.useState(
    new Date("2019-04-01T15:11:54")
  );
  const [selectedTimeEnd, setSelectedTimeEnd] = React.useState(
    new Date("2019-05-01T21:11:54")
  );

  const classes = useStyles();

  function handleTimeChangeStart(date) {
    setSelectedTimeStart(date);
  }

  function handleTimeChangeEnd(date) {
    setSelectedTimeEnd(date);
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <TimePicker
          inputVariant="outlined"
          margin="normal"
          id="mui-pickers-time"
          label="Start Time"
          value={selectedTimeStart}
          onChange={handleTimeChangeStart}
        />
        <TimePicker
          inputVariant="outlined"
          margin="normal"
          id="mui-pickers-time"
          label="End Time"
          value={selectedTimeEnd}
          onChange={handleTimeChangeEnd}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
