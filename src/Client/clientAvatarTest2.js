import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500],

    width: 100,
    height: 100,
    fontSize: 40
  }
}));

export default function SimpleMenu() {
  const classes = useStyles();

  return (
    <div>
      <Avatar color="primary" className={classes.purpleAvatar}>
        JS
      </Avatar>
    </div>
  );
}
