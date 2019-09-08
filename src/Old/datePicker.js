import "moment";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles({
  grid: {
    width: "40%"
  }
});
//test

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDateStart, setSelectedDateStart] = React.useState(
    new Date("2019-04-01T21:11:54")
  );
  const [selectedDateEnd, setSelectedDateEnd] = React.useState(
    new Date("2019-05-01T21:11:54")
  );

  const classes = useStyles();

  function handleDateChangeStart(date) {
    setSelectedDateStart(date);
  }

  function handleDateChangeEnd(date) {
    setSelectedDateEnd(date);
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <DatePicker
          inputVariant="outlined"
          margin="normal"
          id="mui-pickers-date"
          label="Start Date"
          value={selectedDateStart}
          onChange={handleDateChangeStart}
        />
        <DatePicker
          inputVariant="outlined"
          margin="normal"
          id="mui-pickers-date"
          label="End Date"
          value={selectedDateEnd}
          onChange={handleDateChangeEnd}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
