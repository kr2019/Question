import React, { Component } from "react";

class Example extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  getDataFromDb = () => {
    fetch("http://localhost:5000/events")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch("http://localhost:5000/putData", {
      method: "POST",
      data: {
        title: self.refs.title,
        client: self.refs.client
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body);
      });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Title" ref="title" />
        <input type="text" placeholder="Client" ref="client" />
        <input type="submit" />
      </form>
    );
  }
}

export default Example;
