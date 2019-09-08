import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Pink from "@material-ui/core/colors/pink";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },

  purpleAvatar: {
    margin: 10,
    color: theme.palette.getContrastText(Pink[800]),
    backgroundColor: Pink[800],
    "&:hover": {
      backgroundColor: Pink[400]
    },
    width: 100,
    height: 100,
    fontSize: 40,
    marginBottom: theme.spacing.unit * -28
    //marginRight: theme.spacing.unit * 20
  }
}));

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        color="primary"
        className={classes.purpleAvatar}
        onClick={handleClick}
      >
        JJ
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <MenuItem onClick={handleClose}>Upload Picture </MenuItem>
        </label>
        <MenuItem onClick={handleClose}>Remove Picture</MenuItem>
      </Menu>
    </div>
  );
}
