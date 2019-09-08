import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
  root: {
    //paddingTop: theme.spacing(1),
    //paddingBottom: theme.spacing(1)
    padding: theme.spacing(1, 1),
    marginLeft: theme.spacing(-3),
    marginRight: theme.spacing(-3),
    marginTop: theme.spacing(-2.9)
  },

  root2: {
    marginTop: theme.spacing(2)
  },

  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={2}>
        <Typography align="center" variant="h5">
          Client Details
        </Typography>
      </Paper>

      <Button className={classes.root2} size="small" variant="contained">
        <BackIcon className={classes.extendedIcon} />
        Back to Clients page
      </Button>
    </div>
  );
}
