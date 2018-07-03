import React, { Component } from 'react';
import axios from "axios"
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    title: "",
    body: ""
  }

getGetRequest(){
axios.get("/api/test").then( res => {
  console.log( "Getting axios request");
})
}

getPostRequest(){
  axios.post("/api/test", {test:true}).then( res => {
    console.log( "Posting axios request");
  })

}

handleInputChange = event => {
  // const name = event.target.name;
  // const value = event.target.value;
  
  // or deconstruct the above to be:
  
  const {name,value} = event.target;
  this.setState({ [name]: value});
  }

saveBlog = event => {
  event.preventDefault();
  console.log(this.state.title);
  console.log(this.state.body);

}

  render() {
    return (
     <div>

     <form>
     <input name="title" onChange={this.handleInputChange} value={this.state.title}/>
     <textarea name="body" onChange= {this.handleInputChange} value={this.state.body}/>
     <button onClick={this.saveBlog}>Submit</button>
     </form>
      </div>
    );
  }
}

export default App;
