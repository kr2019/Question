import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },

  menu: {
    width: 200
  },
  root: {
    width: "100%",
    //marginLeft: theme.spacing.unit * 22,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2
  },

  container2: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 200
  },

  menu2: {
    width: 200
  },
  root2: {
    width: 1020,
    paddingBottom: theme.spacing.unit * 2
  },
  button: {
    marginLeft: theme.spacing(2)
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  marg: {
    marginLeft: theme.spacing.unit
  },
  saveButton: {
    marginRight: theme.spacing(2)
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

const paymentTypes = [
  {
    value: "Card",
    label: "Card"
  },

  {
    value: "Cash",
    label: "Cash"
  },

  {
    value: "Check",
    label: "Check"
  }
];

const cardTypes = [
  {
    value: "American Express",
    label: "American Express"
  },

  {
    value: "Discover",
    label: "Discover"
  },

  {
    value: "MasterCard",
    label: "MasterCard"
  },
  {
    value: "Visa",
    label: "Visa"
  }
];

class TopPanel extends React.Component {
  state = {
    nameOnCard: "Jeff A. Smith",
    cardNum: "111122223333",
    payorEmail: "jeffsmith@mail.com",
    payorTitle: "Mr.",
    paymentType: "Card",
    billingPhone: "123-456-1111",
    payorAddress: "123 Maple Street",
    payorCity: "Plano",
    payorZip: "75023",
    payorState: "TX",
    cvv: "000",
    expDate: "03/17",
    cardType: "Visa",
    sameAsContact: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChange3 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.root} elevation={1}>
          <Grid container row justify="space-between">
            <FormGroup className={classes.marg} row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.sameAsContact}
                    onChange={this.handleChange("sameAsContact")}
                    value="sameAsContact"
                    color="default"
                  />
                }
                label="Same as contact" /* same as contact 1 */
              />
            </FormGroup>
            <TextField
              id="standard-select-paymentType"
              select
              label="Payment Type"
              variant="outlined"
              className={classes.textField2}
              value={this.state.paymentType}
              onChange={this.handleChange("paymentType")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {paymentTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid direction="column">
              <TextField
                id="standard-select-payorTitle"
                select
                label="Title"
                variant="outlined"
                className={classes.textField}
                value={this.state.payorTitle}
                onChange={this.handleChange("payorTitle")}
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
                id="standard-select-cardType"
                select
                label="Card Type"
                variant="outlined"
                className={classes.textField}
                value={this.state.cardType}
                onChange={this.handleChange("cardType")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {cardTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-payorAddress"
                variant="outlined"
                label="Billing Address"
                className={classes.textField}
                value={this.state.payorAddress}
                onChange={this.handleChange("payorAddress")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                required
                id="standard-nameOnCard"
                label="Name on Card"
                variant="outlined"
                className={classes.textField}
                value={this.state.nameOnCard}
                onChange={this.handleChange("nameOnCard")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                required
                id="standard-cardNum"
                label="Card Number"
                variant="outlined"
                className={classes.textField}
                value={this.state.cardNum}
                onChange={this.handleChange("cardNum")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-payorCity-"
                variant="outlined"
                label="City"
                className={classes.textField}
                value={this.state.payorCity}
                onChange={this.handleChange("payorCity")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                required
                id="standard-payorEmail"
                variant="outlined"
                label="Email"
                className={classes.textField}
                value={this.state.payorEmail}
                onChange={this.handleChange("payorEmail")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-expDate"
                variant="outlined"
                label="Expiration Date"
                className={classes.textField}
                value={this.state.expDate}
                onChange={this.handleChange("expDate")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-state"
                variant="outlined"
                label="State"
                className={classes.textField}
                value={this.state.payorState}
                onChange={this.handleChange("payorState")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-phone"
                variant="outlined"
                label="Billing Phone Number"
                className={classes.textField}
                value={this.state.billingPhone}
                onChange={this.handleChange("billingPhone")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                required
                id="standard-cvv"
                label="CVV"
                type="password"
                variant="outlined"
                className={classes.textField}
                value={this.state.cvv}
                onChange={this.handleChange("cvv")}
                margin="normal"
              />
            </Grid>

            <Grid direction="column">
              <TextField
                id="standard-payorZip"
                variant="outlined"
                label="Zip Code"
                className={classes.textField}
                value={this.state.payorZip}
                onChange={this.handleChange("payorZip")}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Button
              size="medium"
              variant="contained"
              className={classes.button}
            >
              +
            </Button>
            <Button
              className={classes.saveButton}
              size="large"
              variant="contained"
            >
              Save
            </Button>
          </Grid>
        </Paper>
      </form>
    );
  }
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPanel);
