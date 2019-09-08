import React, { Component } from "react";
//import Validation from 'react-validation';
//import "../validation.js";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      email: "",
      msg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      title: this.state.title,
      email: this.state.email
    };
    console.log(data);
    fetch("http://localhost:5000/putData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data === "success") {
          this.setState({ msg: "Thanks for registering" });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  logChange(e) {
    this.setState({ [e.target.title]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Title" ref="Title" />

        <input type="submit" />
      </form>
    );
  }
}
