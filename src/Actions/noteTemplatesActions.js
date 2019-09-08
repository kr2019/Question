import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { Switch, Link, Route } from "react-router-dom";
import TitleBarMemberDet from "../titleBars/titleBarMemberDetails";
import MemberPanelTabs from "../panelTabs/memberPanelTabs";
import Grid from "@material-ui/core/Grid";
import MouseIcon from "@material-ui/icons/Mouse";
import BuildIcon from "@material-ui/icons/Build";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(5),
    // marginLeft: theme.spacing(65),
    align: "center",
    width: "30%"
  },
  button: {
    margin: theme.spacing.unit,
    align: "center"
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

class clientActions extends React.Component {
  state = {
    open: true,
    anchorEl: null
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  /* Select menu options */
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Email</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Download</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Delete</MenuItem>
      </Menu>
    );

    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Paper
            /* onClick={this.reloadPage} */
            className={classes.root}
            elevation={7}
          >
            {/*  <Link style={navStyle} to="/clients/newclient"> */}
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                className={classes.button}
                //onClick={this.handleClickOpen}
              >
                <BuildIcon
                /* className={classNames(
                        classes.leftIcon,
                        classes.iconSmall
                      )} */
                />
                Build
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                //onClick={this.handleClickOpen}
              >
                <SearchIcon
                /* className={classNames(
                        classes.leftIcon,
                        classes.iconSmall
                      )} */
                />
                Search
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                //onClick={this.handleClickOpen}
                onClick={this.handleProfileMenuOpen}
              >
                <MouseIcon
                /* className={classNames(
                        classes.rightIcon,
                        classes.iconSmall
                      )} */
                />
                Selected
              </Button>
              {renderMenu}
            </Grid>
            {/*  </Link> */}
          </Paper>
        </Grid>
      </div>
    );
  }
}

clientActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(clientActions);
