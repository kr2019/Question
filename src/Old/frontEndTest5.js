import React, { Component } from "react";
import axios from "axios";

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //event.preventDefault();
    const data = new FormData(event.target);

    fetch("http://localhost:5000/putData", {
      method: "POST",
      body: data
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Enter title</label>
        <input id="title" name="title" type="text" />

        <label htmlFor="client">Enter your client</label>
        <input id="client" name="client" type="client" />
        <button>Send data!</button>
      </form>
    );
  }
}

export default MyForm;
