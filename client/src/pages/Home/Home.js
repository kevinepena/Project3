import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
  state = {
    title: "",
    body: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  

  messagePost = event => {
    event.preventDefault();
    const { title, body } = this.state;
    console.log({ title, body })
    API.postArticle({ title, body })
    .then(res => {
      console.log(res);
      this.setState({ title: "", body: "" });

    })
    .catch(err => console.log(err));


  };

  render() {
    return (
      <form>
        <h2> Updates / Trending Now</h2>
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
    );
  }
}
export default Home;
