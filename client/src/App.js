import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => (


        // handleInputChange = event => {
        //   // const name = event.target.name;
        //   // const value = event.target.value;

        //   // or deconstruct the above to be:

        //   const { name, value } = event.target;
        //   console.log(name);
        //   this.setState({ [name]: value });
        // };

        // saveBlog = event => {
        //   event.preventDefault();
        //   console.log(this.state.title);
        //   console.log(this.state.body);
        // };

        // messagePost = event => {
        //   event.preventDefault();
        //   const { title, body } = this.state;
        //   axios.post("/api/messages", { title, body }).then(res => {
        //     console.log(res);
        //     this.setState({ title: "", body: "" });
        //   });
        // };

      <Router>
        <div className="App">
        <Nav />
        <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/forum" component={Forum} />
            <Route exact path="/photos"component ={Photos} />
            <Route exact path="/donations"component ={Donations} />
            <Route exact path="/contact"component ={Contact} /> */}
          </Switch>
          <Footer/>
          
        </div>
      </Router>
)

export default App;

//           <hr />

//           <h3> This section will be for our photos</h3>
//           <img
//             alt="sunshin"
//             src="https://spaceplace.nasa.gov/templates/featured/sun/sunburn300.png"
//           />

//           <hr />
//           <h3> This is the Messaging/Forum section</h3>
//           <form>
//             <input
//               name="title"
//               onChange={this.handleInputChange}
//               value={this.state.title}
//             />

//             <br />
//             <br />

//             <textarea
//               name="body"
//               onChange={this.handleInputChange}
//               value={this.state.body}
//             />

//             <br />
//             <br />

//             <button onClick={this.messagePost}>Submit</button>
//           </form>

//           <br />
//           <hr />
//           <h3> This is the Donation section</h3>

//           <br />
//           <form>
//             <input
//               id="donateTest"
//               name="title"
//               onChange={this.handleInputChange}
//               value={this.state.title}
//               placeholder="Donate some money - help a friend!"
//             />

//             <br />
//             <br />
//           </form>

//           <br />