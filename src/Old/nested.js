import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Badge from "@material-ui/core/Badge";
import Home from "@material-ui/icons/Home";
import InsertInvitation from "@material-ui/icons/InsertInvitation";
import Mood from "@material-ui/icons/Mood";
import People from "@material-ui/icons/People";
import LocalGasStation from "@material-ui/icons/LocalGasStation";
import MusicNote from "@material-ui/icons/MusicNote";
import InsertChart from "@material-ui/icons/InsertChart";
import MailIcon from "@material-ui/icons/Mail";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Description from "@material-ui/icons/Description";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

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

class NestedList extends React.Component {
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
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText inset primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsertInvitation />
          </ListItemIcon>
          <ListItemText inset primary="Calendar" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={2} color="secondary">
              <MailIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText inset primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Mood />
          </ListItemIcon>
          <ListItemText inset primary="Clients" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText inset primary="Team Members" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Tools" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <MusicNote />
              </ListItemIcon>
              <ListItemText inset primary="Inventory" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <LocalGasStation />
              </ListItemIcon>
              <ListItemText inset primary="Mileage" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Billing" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AccountBalanceWallet />
              </ListItemIcon>
              <ListItemText inset primary="Accounts & Invoices" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText inset primary="Payroll" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <InsertChart />
              </ListItemIcon>
              <ListItemText inset primary="Reports" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText inset primary="Forms" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText inset primary="Templates" />
        </ListItem>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
