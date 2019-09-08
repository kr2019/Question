import React from "react";
//import { withStyles } from '@material-ui/core/styles';

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChangePrevBal = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChangePrevBal("checkedA")}
            value="checkedA"
          />
        }
        label="Include previous  balance"
      />
    </FormGroup>
  );
}
