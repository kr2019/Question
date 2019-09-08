import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import deepPurple from "@material-ui/core/colors/deepPurple";

import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import NewClientInfo from "../Old/newClientInfo";
import ClientContactInfo from "../Client/clientContactInfo";
import ClientPayorInfo from "../Client/clientPayorInfo";

import GoalsObjectives from "../Client/goalsObjectives";
import Cyan from "@material-ui/core/colors/cyan";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
    // paddingLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 15,
    marginLeft: theme.spacing.unit * 22,
    marginRight: theme.spacing.unit * 22,
    align: "center",
    width: "77.5%",
    height: "120"
  },

  toggle: {
    paddingRight: theme.spacing.unit * 30
  },

  marg: {
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },

  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500],
    width: 100,
    height: 100,
    fontSize: 40,
    marginBottom: theme.spacing.unit * -28,
    marginRight: theme.spacing.unit * 18
  },

  appBar: {
    backgroundColor: Cyan[800],
    marginTop: theme.spacing(10),
    borderRadius: theme.shape.borderRadius
  },

  colorSwitchBase: {
    color: red[300],
    "&$colorChecked": {
      color: green[500],
      "& + $colorBar": {
        backgroundColor: green[500]
      }
    }
  },
  colorBar: {},
  colorChecked: {},

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 300
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },

  checked: {},

  root2: {
    //flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    // marginLeft: theme.spacing.unit * 22,
    marginRight: theme.spacing.unit * 22,
    //marginTop: theme.spacing.unit * 22,
    width: "77.5%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Cyan[800]
  }
});

const selectedClient = [
  {
    value: "Billy Joe",
    label: "Billy Joe"
  },

  {
    value: "Ashley Flowers",
    label: "Ashley Flowers"
  },
  {
    value: "John Smith",
    label: "John Smith"
  }
];

const clientTypes = [
  {
    value: "",
    label: ""
  },

  {
    value: "Individual",
    label: "Individual"
  },

  {
    value: "Facility",
    label: "Facility"
  }
];

class TopPanel extends React.Component {
  state = {
    checkedA: true,
    client: "John Smith",
    open: false,
    cost: "",
    length: "",
    clientType: "",
    checkedProspect: false,
    checkedThera: true,
    checkedIntern: false,
    tabValue: 0
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  /* change of client dropdown */
  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  // change of check boxes
  handleChange3 = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChange4 = (event, tabValue) => {
    this.setState({ tabValue });
  };

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;

    return (
      <div>
        <Container maxWidth="md">
          {/* Avatar */}
          {/*
          <Grid container justify="center" alignItems="center">
            <ClientAvatar />
          </Grid>
          <Paper className={classes.root} elevation={1}>
            <Grid container row justify="space-between">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedA}
                      onChange={this.handleChange("checkedA")}
                      value="checkedA"
                      className={classes.marg}
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                  }
                  label="Active"
                />
              </FormGroup>

              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedProspect}
                      onChange={this.handleChange("checkedProspect")}
                      value="checkedProspect"
                      color="default"
                    />
                  }
                  label="Prospect"
                />
              </FormGroup>
            </Grid>
            
            <Grid container row justify="space-between">
              <TextField
                id="standard-select-client"
                select
                label="Client"
                variant="outlined"
                className={classes.textField}
                value={this.state.client}
                onChange={this.handleChange("client")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {selectedClient.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="standard-select-member"
                select
                label="Client Type"
                variant="outlined"
                className={classes.textField2}
                value={this.state.clientType}
                onChange={this.handleChange("clientType")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {clientTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Paper>
*/}
          <AppBar className={classes.appBar} position="static">
            <Tabs value={tabValue} onChange={this.handleChange4}>
              <Tab label="Client Information" />
              <Tab label="Contact Information" />
              <Tab label="Payor Information" />
              {/*  <Tab label="Note History" />
              <Tab label="Message History" />
<Tab label="Goals & Objectives" /> */}
            </Tabs>
          </AppBar>

          {tabValue === 0 && <NewClientInfo />}
          {tabValue === 1 && <ClientContactInfo />}
          {tabValue === 2 && <ClientPayorInfo />}
          {/*  {tabValue === 3 && <NoteHistoryTable />} */}
          {/* {tabValue === 4 && <Paper>Message History</Paper>} */}
          {tabValue === 5 && <GoalsObjectives />}
        </Container>
      </div>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
