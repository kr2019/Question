import React, { Component } from "react";
//import { render } from "react-dom";

import Calendar from "react-big-calendar";
import moment from "moment";

import { withStyles } from "@material-ui/core/styles";
//import NewEventDialog2 from "./newEventDialog2";

import "react-big-calendar/lib/css/react-big-calendar.css";

import Container from "@material-ui/core/Container";

import KPI1 from "./kpi1";
import KPI2 from "./kpi2";

import axios from "axios";

const localizer = Calendar.momentLocalizer(moment);
const propTypes = {};
moment().toDate();

const styles = theme => ({
  state: {
    open: false,
    openV: false
  },

  root: {
    marginTop: theme.spacing(5),
    height: "100%"
    // width: "90%"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 192
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  root3: {
    width: "100%"
  }
});

const navStyle = {
  color: "black",
  textDecoration: "none"
};

const newBillTypes = [
  {
    value: "Billable",
    label: "Billable"
  },

  {
    value: "Non-billable",
    label: "Non-billable"
  }
];

const newClientTypes = [
  {
    value: "Individual",
    label: "Individual"
  },

  {
    value: "Facility",
    label: "Facility"
  }
];

const clients = [
  {
    value: "John Smith",
    label: "John Smith"
  },

  {
    value: "Jill Smith",
    label: "Jill Smith"
  },
  {
    value: "Ashley Flowers",
    label: "Ashley Flowers"
  }
];

const therapists = [
  {
    value: "Therapist 1",
    label: "Therapist 1"
  },

  {
    value: "Harry Potter",
    label: "Harry Potter"
  },
  {
    value: "Therapist 3",
    label: "Therapist 3"
  }
];

const categories = [
  {
    value: "None",
    label: "None"
  }
];

class ReactCalendarBase extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      cal_events: [
        //State is updated via componentDidMount
      ],
      data: [],
      //id: 0,
      newBillType: "",
      newClientType: "",
      // title: null,
      newClient: "",
      newTherapist: "",
      newLocation: "",
      newCategory: "",
      newStartDate: "",
      newStartTime: "",
      newEndDate: "",
      newEndTime: "",
      information: "",
      intervalIsSet: "",
      idToDelete: "",
      idToUpdate: "",
      objectToUpdate: "",
      selectedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      endSelectedDate: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  }

  convertDate = date => {
    return moment.utc(date).toDate();
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/events")
      .then(response => {
        console.log("Got calendar data!");
        console.log(response.data);
        let appointments = response.data;
        /*
        for (let i = 0; i < appointments.length; i++) {
          appointments[i].start = this.convertDate(appointments[i].start);
          appointments[i].end = this.convertDate(appointments[i].end);
        }
*/
        this.setState({
          cal_events: appointments
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    /* this.getDataFromDb(); */
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
      console.log("Calendar interval set!");
    }
  }

  /*
  reloadPage(prevState) {
    // if (this.state.location !== prevState.location) {
    window.location.reload();
    console.log("Refresh!");
  }
  */
  //}

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from events!");
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  /*
  getDataFromDb = () => {
    fetch("http://localhost:5000/events")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
  */
  /*
  componentDidUpdate(prevState) {
    if (this.state.cal_events !== prevState.cal_events) {
      console.log("Updated!");
    }
  }
  */

  // this technically works, but it keeps "updating" non-stop instead of just the few times
  // even technically works for state.data
  /*
  componentDidUpdate(prevState) {
    if (this.state.cal_events !== prevState.cal_events) {
      this.componentDidMount();
      console.log("Updated!");
    }
  }
  */

  // our put method that uses our backend api
  // to create new query into our data base
  /*
  //this is being commented out because the same thing is already being done at onSubmit
  putDataToDB = (
    newBillType,
    newClientType,
    title,
    newClient,
    newTherapist,
    newLocation,
    newCategory
  ) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:5000/api/putData2", {
      id: idToBeAdded,
      newBillType: newBillType,
      newClientType: newClientType,
      title: title,
      newClient: newClient,
      newTherapist: newTherapist,
      newLocation: newLocation,
      newCategory: newCategory
      //start: start,
      //end: end,
      //newClient: newClient,
      //newTherapist: newTherapist
    });
  };
*/

  onSubmit(e) {
    //experiment keeping preventDefault
    //e.preventDefault();

    const obj = {
      //title: this.state.title,
      newBillType: this.state.newBillType,
      newClientType: this.state.newClientType,
      newTherapist: this.state.newTherapist,
      newLocation: this.state.newLocation,
      newCategory: this.state.newCategory,
      newClient: this.state.newClient,
      selectedDate: this.state.selectedDate,
      endSelectedDate: this.state.endSelectedDate
    };
    axios
      .post("http://localhost:5000/putData2", obj)
      .then(res => console.log(res.data));
    /* this will clear everything after saving+closing */

    this.setState({
      newBillType: "",
      newClientType: "",
      //title: "",
      newClient: "",
      newTherapist: "",
      newLocation: "",
      newCategory: "",
      selectedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      endSelectedDate: moment().format("YYYY-MM-DD HH:mm:ss")
    });
  }

  /* show new event dialog box */
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  /* close new event dialog box */
  handleClose = () => {
    this.setState({
      open: false,
      //this will set the values to blank once the window is closed
      newBillType: "",
      newClientType: "",
      title: "",
      newClient: "",
      newTherapist: "",
      newLocation: "",
      newCategory: "",
      selectedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      endSelectedDate: moment().format("YYYY-MM-DD HH:mm:ss")
    });
  };

  /* show existing event dialog box */
  handleClickOpen2 = () => {
    this.setState({ openV: true });
  };

  /* close existing event dialog box */
  handleClose2 = () => {
    this.setState({ openV: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleDateChangeStart = date => {
    this.setState({ selectedDate: date.format("YYYY-MM-DD HH:mm:ss") });
  };

  handleDateChangeEnd = date => {
    this.setState({ endSelectedDate: date.format("YYYY-MM-DD HH:mm:ss") });
  };

  render() {
    const { classes } = this.props;
    //const classes = withStyles();
    const { cal_events, selectedDate, endSelectedDate } = this.state;

    return (
      <div>
        <Container style={{ height: 400 }} maxWidth="md">
          <KPI2 />
          <Calendar
            className={classes.root}
            selectable
            startAccessor={cal_events => new Date(cal_events.start)}
            endAccessor={cal_events => new Date(cal_events.end)}
            localizer={localizer}
            events={cal_events}
            //events={events}
            views={["day"]}
            defaultDate={new Date()}
            defaultView="day"
            onSelectEvent={this.handleClickOpen2}
            onSelectSlot={this.handleClickOpen}
            min={new Date(2000, 1, 1, 7)}
            max={new Date(2000, 1, 1, 18)}
          />
          <KPI1 />
        </Container>
      </div>
    );
  }
}

ReactCalendarBase.propTypes = propTypes;

//export default ReactCalendarBase;
export default withStyles(styles)(ReactCalendarBase);
