import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="non-billable"
          control={<Radio color="primary" />}
          label="Non-billable"
          labelPlacement="non-billable"
        />
        <FormControlLabel
          value="billable"
          control={<Radio color="primary" />}
          label="Billable"
          labelPlacement="billable"
        />
      </RadioGroup>
    </FormControl>
  );
}
