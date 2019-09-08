import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Cyan from "@material-ui/core/colors/cyan";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: Cyan[800]
  }
}));

const navStyle = {
  color: "black",
  textDecoration: "none"
};

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <BrowserRouter>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <Grid item container spacing={4}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // autoFocus
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                //autoComplete="current-password"
              />
              <Button
                type="submitButton"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submitButton}
              >
                Sign In
              </Button>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Paper
                  elevation={0}
                  className={classes.root3}
                  onClick={this.reloadPage}
                >
                  <Link style={navStyle} to="/signup">
                    "Don't have an account? Sign Up"
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </form>
        </div>
      </BrowserRouter>
    </Container>
  );
}
