import React from "react";
import BigCalendar from "react-big-calendar";
import events from "../events";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const propTypes = {};

class Selectable extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { events };
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title
          }
        ]
      });
  };

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    return (
      <>
        <BigCalendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={BigCalendar.Views.WEEK}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        />
      </>
    );
  }
}

Selectable.propTypes = propTypes;

export default Selectable;
