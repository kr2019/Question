import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import NewMemberInfo from "./newMemberInfo";
import AssignedClientsActions from "../Actions/asssignedClientsActions";
import BackendAssignedClientsTable from "../Tables/backEndAssignedClientsTable";
import Box from "@material-ui/core/Box";
/*
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
*/
/*
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
*/
const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    width: "60%",
    marginLeft: theme.spacing(22),
    marginRight: theme.spacing(22),
    borderRadius: theme.shape.borderRadius
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Box width="75%">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Team Member Information" wrapped />
            <Tab label="Assigned Clients" wrapped />
            <Tab label="Message History" wrapped />
            <Tab label="Files" wrapped />
            <Tab label="Privliges" wrapped />
          </Tabs>
        </AppBar>
        {value === 0 && <NewMemberInfo />}
        {value === 1 && <AssignedClientsActions />}
        {value === 1 && <BackendAssignedClientsTable />}
        {value === 2 /* && <Paper>Message History</Paper> */}
        {value === 3 /* && <MemberUploadAction /> */}
        {value === 3 /* && <TeamMemFilesTable /> */}
        {/* priliges if therapist was admin */}
        {/* {value === 4 && <AdminPrivliges />} */}
        {/* priliges if therapist had just therapist privliges */}
        {value === 4 /* && <TherapistPrivliges />*/}
      </div>
    </Box>
  );
}
