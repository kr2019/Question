import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(5),

    align: "center",
    width: "19.5%"
  },
  button: {
    align: "center"
  },

  colorButton: {
    marginTop: theme.spacing(4),

    align: "center",
    /* this is text color */ color: theme.palette.getContrastText("#1565c0"),
    backgroundColor: "#1565c0",
    "&:hover": {
      backgroundColor: "#1976d2"
    }
  },

  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const navStyle = {
  color: "black",
  textDecoration: "none"
};

class teamMemberActions extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="center"
        >
          <Link style={navStyle} to="/teammembers/newmember">
            <Grid
              container
              direction="row-reverse"
              justify="center"
              alignItems="center"
            >
              <Button variant="contained" className={classes.colorButton}>
                <AddIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Add New
              </Button>
            </Grid>
          </Link>
        </Grid>
      </div>
    );
  }
}

teamMemberActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(teamMemberActions);
