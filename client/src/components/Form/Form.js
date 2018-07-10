import React, {Component} from "react";
// import { Redirect } from "react-router-dom";
import API from "../../utils/API";

class Form extends Component {

  refreshBlogs() {
    console.log("this should go!");
    API.getArticle().then(res => {
      console.log(res.data);
      this.setState({ blogs: res.data });
    });
  }

  componentDidMount() {
    this.refreshBlogs();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };
  postBlog = event => {
    event.preventDefault();
    const { title, body } = this.state;
    console.log({ title, body });
    API.postArticle({ title, body })
      .then(res => {
        console.log(res);
        this.setState({ title: "", body: "" });
      })
      .catch(err => console.log(err));
  };

  render () {
    return (
  
   <form>

   <h1> Create A New Blog Post Below: </h1>
    <input
      name="title"
      onChange={this.handleInputChange}
      value={this.title}
      placeholder= {`Add Title to your Post`}
    />
    <textarea
      name="body"
      onChange={this.handleInputChange}
      value={this.body}
      placeholder= {`Add content to your post!`}
    />
    <button onClick={this.postBlog}>Submit</button>
 
  </form>
    )
}}

export default Form;
