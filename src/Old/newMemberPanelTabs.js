import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AssignedClientsTable from "../Tables/assignedClientsTable";
import TeamMemFilesTable from "../Tables/teamMemFilesTable";
import AssignClientsActions from "../Actions/assignClientActions";
import NewTeamMemberInfo from "./newTeamMemberInfo";
import MemberUploadAction from "../Actions/memberUploadAction";
import AdminPrivliges from "../adminPrivliges";
import TherapistPrivliges from "../therapistPrivliges";
import MemberAvatar from "../memberAvatarTest";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Cyan from "@material-ui/core/colors/cyan";

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
    // paddingLeft: theme.spacing.unit,
    //marginTop: theme.spacing.unit * 15,
    //marginLeft: theme.spacing.unit * 22,
    //marginRight: theme.spacing.unit * 22
    align: "center",
    //width: "66%",
    height: "130"
  },

  appBar: {
    backgroundColor: Cyan[800],
    marginTop: theme.spacing(10),
    borderRadius: theme.shape.borderRadius
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
  menu: {
    width: 200
  },

  checked: {}
});

class TopPanel extends React.Component {
  state = {
    checkedA: false,
    member: "Harry Potter",
    open: false,
    client: "",
    cost: "",
    length: "",
    type: "",
    checkedAdmin: false,
    checkedThera: false,
    checkedIntern: false,
    tabValue: 0
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  /* change of team member dropdown */
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
          <Paper elevation={1}>
            <Grid container row justify="space-between">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedA}
                      onChange={this.handleChange("checkedA")}
                      value="checkedA"
                      marginLeft="theme.spacing.unit * 20"
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
                      checked={this.state.checkedAdmin}
                      onChange={this.handleChange("checkedAdmin")}
                      value="checkedAdmin"
                      color="default"
                    />
                  }
                  label="Administrator"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedThera}
                      onChange={this.handleChange("checkedThera")}
                      value="checkedThera"
                      color="default"
                    />
                  }
                  label="Therapist"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedIntern}
                      onChange={this.handleChange("checkedIntern")}
                      value="checkedIntern"
                      color="default"
                    />
                  }
                  label="Intern"
                />
              </FormGroup>
            </Grid>
          </Paper>

*/}
          <AppBar className={classes.appBar} position="static">
            <Tabs value={tabValue} onChange={this.handleChange4}>
              <Tab label="Team Member Information" />
              <Tab label="Assigned Clients" />
              <Tab label="Files" />
              <Tab label="Privliges" />
            </Tabs>
          </AppBar>

          {tabValue === 0 && <NewTeamMemberInfo />}
          {tabValue === 1 && <AssignClientsActions />}
          {/* {tabValue === 1 && <AssignedClientsTable />} */}
          {tabValue === 2 && <MemberUploadAction />}
          {/* {tabValue === 2 && <TeamMemFilesTable />} */}
          {/* {tabValue === 4 && <AdminPrivliges />} */}
          {/* {tabValue === 3 && <TherapistPrivliges />} */}
        </Container>
      </div>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
