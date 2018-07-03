import React, { Component } from "react";
import axios from "axios";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  state = {
    title: "",
    body: ""
  };

  handleInputChange = event => {
    // const name = event.target.name;
    // const value = event.target.value;

    // or deconstruct the above to be:

    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  saveBlog = event => {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.body);
  };

  messagePost = event => {
    event.preventDefault();
    const {title, body} = this.state;
    axios.post("/api/messages",{title, body}).then(res => {
      console.log(res)
      this.setState({title:"", body: ""});
    })
  }

  render() {
    return (
      <div className="App">
      <nav className="nav">
      <h1 className="App-header"> Nav Header: Name of project to come soon!</h1>
      </nav>
        <hr/>
        <br />
        <br /> 
        <form>
          <input
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />

          <br />
          <br />

          <textarea
            name="body"
            onChange={this.handleInputChange}
            value={this.state.body}
          />

          <br />
          <br />

          <button onClick={this.messagePost}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
