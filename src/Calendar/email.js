import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  textField: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  textField2: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 550
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function PaperSheet() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    toEmail: "",
    toHIPPA: "",
    fromEmail: "",
    emailSubject: "",
    emailMessage: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <TextField
            id="standard-existingLocation"
            label="To"
            variant="outlined"
            className={classes.textField}
            value={values.toEmail}
            onChange={handleChange("toEmail")}
            margin="normal"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <TextField
            id="standard-existingLocation"
            label="From"
            variant="outlined"
            className={classes.textField}
            value={values.fromEmail}
            onChange={handleChange("fromEmail")}
            margin="normal"
          />
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          />
          <TextField
            id="standard-existingLocation"
            label="Subject"
            variant="outlined"
            className={classes.textField2}
            value={values.emailSubject}
            onChange={handleChange("emailSubject")}
            margin="normal"
          />
        </Grid>
        <TextField
          id="standard-existingLocation"
          fullWidth
          multiline
          rows="10"
          label="Message Body"
          variant="outlined"
          className={classes.textField}
          value={values.emailMessage}
          onChange={handleChange("emailMessage")}
          margin="normal"
        />
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Button variant="contained" className={classes.button}>
            Send
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}
