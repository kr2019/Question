import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Paper from "@material-ui/core/Paper";

import PleaseWork from "../teamMember/PleaseWork";
import PleaseWork2 from "../teamMember/PleaseWork2";

import AssignedClientsTable from "../Tables/assignedClientsTable";

import TeamMemFilesTable from "../Tables/teamMemFilesTable";
import AssignedClientsActions from "../Actions/asssignedClientsActions";

const styles = theme => ({
  root: {
    //flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    marginLeft: theme.spacing.unit * 22,
    marginRight: theme.spacing.unit * 22,
    width: 878
  }
});
class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Team Member Information" />
            <Tab label="Assigned Clients" />
            <Tab label="Message History" />
            <Tab label="Files" />
            <Tab label="Privliges" />
          </Tabs>
        </AppBar>

        {value === 0 && <PleaseWork />}
        {value === 0 && <PleaseWork2 />}
        {value === 1 && <AssignedClientsActions />}
        {value === 1 && <AssignedClientsTable />}
        {value === 2 && <Paper>Message History</Paper>}
        {value === 3 && <TeamMemFilesTable />}
        {value === 4 && <Paper>Privliges</Paper>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
