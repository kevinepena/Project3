import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import API from "../../utils/API";// 


const Form = props => (
  
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
    <Redirect to="/" />
  </form>
    );

export default Form;
