import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  checked: {}
};

class CheckboxLabels extends React.Component {
  state = {
    checkedActive: true,
    checkedInactive: false,
    checkedProspect: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    //const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedActive}
              onChange={this.handleChange("checkedActive")}
              value="checkedActive"
              color="default"
            />
          }
          label="Active"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedInactive}
              onChange={this.handleChange("checkedInactive")}
              value="checkedInactive"
              color="default"
            />
          }
          label="Inactive"
        />
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
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxLabels);
