import React from "react";
import { SideNav, Nav } from "react-sidenav";
//import { ExampleNavigation as Navigation } from "./containers";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import styled from "styled-components";
import InboxIcon from "@material-ui/icons/MoveToInbox";

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

class ClickTest extends React.Component {
  state = { selectedPath: "1" };

  render() {
    return (
      <SideNav defaultSelectedPath="1" onItemSelection={this.onItemSelection}>
        <Nav id="3">
          <InboxIcon />
          Nav 3<Nav id="1">Nav 3.1</Nav>
          <Nav id="2">Nav 3.2</Nav>
        </Nav>
        <Nav id="4">Nav 4</Nav>
      </SideNav>
    );
  }
}

ClickTest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClickTest);
