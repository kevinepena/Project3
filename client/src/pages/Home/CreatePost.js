import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../../utils/API";
import Form from "../../components/Form";

class CreatePost extends Component {
  state = {
    title: "",
    body: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };
  postBlog = event => {
    event.preventDefault();
    const { getAccessToken } = this.props.auth;
    const headers = { authorization: `Bearer ${getAccessToken()}` };
    const { title, body } = this.state;
    API
      .post(
        "/api/blog",
        { title, body },
        { crossDomain: true, withCredentials: true, headers }
      )
      .then(res => {
        console.log(res);
        this.setState({ title: "", body: "" });
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <Form />

    );
  }
}

export default CreatePost;
