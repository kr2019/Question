import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import InsertInvitation from "@material-ui/icons/InsertInvitation";
import Mood from "@material-ui/icons/Mood";

import PeopleOutline from "@material-ui/icons/PeopleOutline";
import Badge from "@material-ui/core/Badge";
import LocalGasStation from "@material-ui/icons/LocalGasStation";
import MusicNote from "@material-ui/icons/MusicNote";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import MailIcon from "@material-ui/icons/Mail";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";

import LibraryBooks from "@material-ui/icons/LibraryBooks";

import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import { BrowserRouter, Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

const navStyle = {
  color: "black",
  textDecoration: "none"
};

class NestedList2 extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  //ListItemIcon makes the icon faded and does the positioning
  render() {
    const { classes } = this.props;

    return (
      <List component="nav" className={classes.root}>
        <BrowserRouter>
          <Link style={navStyle} to="/home">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
        </BrowserRouter>
        <ListItem button>
          <ListItemIcon>
            <InsertInvitation />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={2} color="secondary">
              <MailIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Mood />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleOutline />
          </ListItemIcon>
          <ListItemText primary="Team Members" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalGasStation />
          </ListItemIcon>
          <ListItemText primary="Mileage" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceWallet />
          </ListItemIcon>
          <ListItemText primary="Acounts & Invoices" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalance />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsertChartOutlined />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsertDriveFile />
          </ListItemIcon>
          <ListItemText primary="Forms" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Note Templates" />
        </ListItem>
      </List>
    );
  }
}

NestedList2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList2);
