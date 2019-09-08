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
import AssignedClientsTable from "./assignedClientsTable";
import TeamMemFilesTable from "./teamMemFilesTable";
import AssignedClientsActions from "./asssignedClientsActions";
import PleaseWork3 from "./pleaseWork3";
import MemberUploadAction from "./memberUploadAction";
import AdminPrivliges from "../adminPrivliges";
import TherapistPrivliges from "../therapistPrivliges";
import MemberAvatar from "../memberAvatarTest";

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
    // paddingLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 15,
    marginLeft: theme.spacing.unit * 22,
    marginRight: theme.spacing.unit * 22,
    align: "center",
    width: "66%",
    height: "130"
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

  checked: {},

  root2: {
    //flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    marginLeft: theme.spacing.unit * 22,
    marginRight: theme.spacing.unit * 22,
    //marginTop: theme.spacing.unit * 22,
    width: "66%",
    borderRadius: theme.shape.borderRadius
  }
});

const members = [
  {
    value: "Jane Doe",
    label: "Jane Doe"
  },

  {
    value: "Hermione Granger",
    label: "Hermione Granger"
  },
  {
    value: "Harry Potter",
    label: "Harry Potter"
  }
];

class TopPanel extends React.Component {
  state = {
    checkedA: true,
    member: "Harry Potter",
    open: false,
    client: "",
    cost: "",
    length: "",
    type: "",
    checkedAdmin: true,
    checkedThera: true,
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
        {/* Avatar */}
        <Grid container justify="center" alignItems="center">
          <MemberAvatar />
        </Grid>
        <Paper className={classes.root} elevation={1}>
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

          {/* member drop down */}
          <Grid container row justify="space-between">
            <TextField
              id="standard-select-member"
              select
              label="Team Member"
              variant="outlined"
              className={classes.textField}
              value={this.state.member}
              onChange={this.handleChange2("member")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {members.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

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

        <AppBar className={classes.root2} position="static">
          <Tabs value={tabValue} onChange={this.handleChange4}>
            <Tab label="Team Member Information" />
            <Tab label="Assigned Clients" />
            <Tab label="Message History" />
            <Tab label="Files" />
            <Tab label="Privliges" />
          </Tabs>
        </AppBar>

        {tabValue === 0 && <PleaseWork3 />}
        {tabValue === 1 && <AssignedClientsActions />}
        {tabValue === 1 && <AssignedClientsTable />}
        {tabValue === 2 && <Paper>Message History</Paper>}
        {tabValue === 3 && <MemberUploadAction />}
        {tabValue === 3 && <TeamMemFilesTable />}
        {/* {tabValue === 4 && <AdminPrivliges />} */}
        {tabValue === 4 && <TherapistPrivliges />}
      </div>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
