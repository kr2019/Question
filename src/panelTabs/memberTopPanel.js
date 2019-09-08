import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EmailIcon from "@material-ui/icons/Email";
import FilterIcon from "@material-ui/icons/FilterList";
import ActiveRadioButton from "../Old/activeRadioButton";
import TeamMemberChecked from "../Old/teamMemberChecked";
import MemberAvatar from "../Old/memberAvatarOLD";
import Grid from "@material-ui/core/Grid";
import clientTextInputs from "../Client/clientTextInputs";
import TeamMembersToggle from "../teamMember/teamMembersToggle";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
    paddingLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * -6,
    marginLeft: theme.spacing.unit * 22,
    marginRight: theme.spacing.unit * 22,
    align: "center",
    width: "950",
    height: "160"
  },

  toggle: {
    paddingRight: theme.spacing.unit * 30
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <MemberAvatar />
      <Paper className={classes.root} elevation={1}>
        <ActiveRadioButton />
        <TeamMembersToggle />
        <TeamMemberChecked />
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
