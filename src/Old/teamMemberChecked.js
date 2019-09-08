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
    checkedAdmin: false,
    checkedThera: true,
    checkedIntern: false
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
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxLabels);
