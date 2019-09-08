import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import AccountsActions from "./accountsActions";

import TransactionsTable from "../Tables/transactionsTable";
import TransactionsActions from "../Actions/transactionsActions";
import InvoiceActions from "../Actions/invoiceActions";
import InvoicesTable from "../Tables/invoicesTable";

import AccountsTable from "../Tables/accountsTable";
import TransactionsTableNew from "../Tables/transactionsTableNew";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    //flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 55,
    marginRight: theme.spacing.unit * 55,
    width: 500
  }
});
class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Accounts" />
            <Tab label="Transactions" />
            <Tab label="Invoices" />
          </Tabs>
        </AppBar>

        {value === 0 && <AccountsActions />}
        {value === 0 && <AccountsTable />}
        {value === 1 && <TransactionsActions />}
        {value === 1 && <TransactionsTableNew />}
        {value === 2 && <InvoiceActions />}
        {value === 2 && <InvoicesTable />}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
