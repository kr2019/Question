import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red, lightBlue, green, cyan, yellow } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    width: 100,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 5,
    backgroundColor: yellow[800]
  },
  card2: {
    width: 100,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 10,
    backgroundColor: yellow[800]
  },
  card3: {
    width: 100,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 10,
    backgroundColor: yellow[800]
  },

  title: {
    fontSize: 20
  },
  title2: {
    fontSize: 20
  }
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Grid container justify="center" alignItems="center">
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            3
          </Typography>
          <Typography className={classes.title2} color="textSecondary">
            Overdue Notes
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card2}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            5
          </Typography>
          <Typography className={classes.title2} color="textSecondary">
            Team Tasks
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card3}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            2
          </Typography>
          <Typography className={classes.title2} color="textSecondary">
            Client Messages
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
