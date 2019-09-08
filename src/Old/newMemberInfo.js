import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },

  menu: {
    width: 200
  },
  root: {
    width: "100%",
    //marginLeft: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },

  saveButton: {
    marginRight: theme.spacing(2)
  },

  container2: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 850
  },

  menu2: {
    width: 200
  },
  button: {
    width: 1020,
    paddingBottom: theme.spacing(2)
  }
});

const titles = [
  {
    value: "",
    label: ""
  },

  {
    value: "Dr.",
    label: "Dr."
  },

  {
    value: "Miss",
    label: "Miss"
  },

  {
    value: "Mr.",
    label: "Mr."
  },
  {
    value: "Mrs.",
    label: "Mrs."
  },
  {
    value: "Ms.",
    label: "Ms."
  },
  {
    value: "Mx.",
    label: "Mx."
  }
];

class TopPanel extends React.Component {
  state = {
    memberData: [],
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    currentPassword: "",
    confirmPassword: "",
    phone: "",
    address: "",
    primaryLocation: "",
    npi: "",
    city: "",
    zipCode: "",
    multiline: "Controlled",
    notes: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/memberInfo")
      .then(response => {
        console.log(response.data);
        this.setState({
          memberData: response.data
          //firstName: this.state.memberData.first_name
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    const { memberData } = this.state;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        {memberData.map(data => (
          <Paper className={classes.root} elevation={1}>
            <Grid container justify="center" alignItems="center">
              <Grid direction="column">
                <TextField
                  id="standard-select-title"
                  select
                  label="Title"
                  variant="outlined"
                  className={classes.textField}
                  value={data.title}
                  onChange={this.handleChange("title")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                >
                  {titles.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-phone"
                  variant="outlined"
                  label="Phone Number"
                  className={classes.textField}
                  value={data.phone}
                  onChange={this.handleChange("phone")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-firstName"
                  label="First Name"
                  variant="outlined"
                  className={classes.textField}
                  value={data.first_name}
                  onChange={this.handleChange("firstName")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-email"
                  variant="outlined"
                  label="Email"
                  className={classes.textField}
                  value={data.email}
                  onChange={this.handleChange("email")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-lastNamename"
                  label="Last Name"
                  variant="outlined"
                  className={classes.textField}
                  value={data.email}
                  onChange={this.handleChange("lastName")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-address"
                  variant="outlined"
                  label="Address"
                  className={classes.textField}
                  value={data.street_address}
                  onChange={this.handleChange("address")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-password-input"
                  variant="outlined"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  value={data.pass}
                  //autoComplete="current-password"
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-city-"
                  variant="outlined"
                  label="City"
                  className={classes.textField}
                  value={data.city}
                  onChange={this.handleChange("city")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  required
                  id="standard-confirmPassword-input"
                  variant="outlined"
                  label="Confirm Password"
                  className={classes.textField}
                  type="password"
                  value={data.confirm_pass}
                  //autoComplete="current-password"
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-zipCode"
                  variant="outlined"
                  label="Zip Code"
                  className={classes.textField}
                  value={data.zip}
                  onChange={this.handleChange("zipCode")}
                  margin="normal"
                />
              </Grid>

              <Grid direction="column">
                <TextField
                  id="standard-npi"
                  variant="outlined"
                  label="NPI Number"
                  className={classes.textField}
                  value={data.npi}
                  onChange={this.handleChange("npi")}
                  margin="normal"
                />
              </Grid>
              <Grid direction="column">
                <TextField
                  id="standard-primary-location"
                  variant="outlined"
                  label="Primary Location"
                  className={classes.textField}
                  value={data.location}
                  onChange={this.handleChange("primaryLocation")}
                  margin="normal"
                />
              </Grid>

              <TextField
                id="standard-full-width"
                label="Additional Notes"
                style={{ margin: 8 }}
                className={classes.textField2}
                placeholder="Add any additional notes here"
                fullWidth
                multiline
                value={data.notes}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid container direction="row" justify="flex-end">
              <Button
                className={classes.saveButton}
                size="large"
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </Paper>
        ))}
      </form>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
