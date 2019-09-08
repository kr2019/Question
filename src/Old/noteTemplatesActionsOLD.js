import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MouseIcon from "@material-ui/icons/Mouse";
import BuildIcon from "@material-ui/icons/Build";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2, 2)
  },

  button: {
    margin: theme.spacing(0, 2, 0)
  },

  icon: {
    //marginLeft: theme.spacing(),
    marginRight: theme.spacing()
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PaperSheet() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Grid sm={8}>
          <Paper className={classes.root}>
            <Button
              variant="contained"
              // onClick={this.handleClickOpen}
              className={classes.button}
            >
              <BuildIcon className={classes.icon} onClick={handleClickOpen} />
              Build
            </Button>
            <Button
              variant="contained"
              // onClick={this.handleClickOpen}
              className={classes.button}
            >
              <MouseIcon
                className={classes.icon}
                //onClick={handleClickOpen}
              />
              Selected
            </Button>
          </Paper>
        </Grid>
      </Container>
      {/* Full Screen Template Builder */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Note Template Builder
            </Typography>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}
