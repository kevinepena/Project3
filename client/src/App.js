import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Auth from "./auth/Auth";
import history from "./history";
import Header from "./components/Header";
import Nav from "./components/Nav";
import GoFund from "./components/GoFund";
import Home from "./pages/Home";
import { Forum } from "./pages/Forum";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import Callback from "./components/Callback";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import axios from "axios";

const auth = new Auth();



class App extends Component {

  render() {

    return (
      <Router history={history}>
        <div className="App">
          <Nav auth={auth} />
          <Header />

          <div>
            {/* <Route exact path="/" component={Home} /> */}
            <Route
              exact
              path="/"
              render={props => {
                return <Home auth={auth} {...props} />;
              }}
            />

            <Route
              exact
              path="/donations"
              render={props => {
                return <GoFund auth={auth} {...props} />;
              }}
            />

            <Route
              exact
              path="/forum"
              render={props => {
                return <Forum auth={auth} {...props} />;
              }}
            />


            <Route
              exact
              path="/editforum"
              render={props => {
                return auth.isAuthenticated() &&
                  auth.userHasScopes(["post:blog"]) ? (
                    <Forum auth={auth} {...props} />
                  ) : (
                    <Redirect to="/" />
                  );
              }}
            />

            <Route exact path="/profile" render={
              (props) => {
                return (auth.isAuthenticated()) ? (
                  <Profile auth={auth} {...props} />
                ) : (
                    <Redirect to="/" />
                  )

              }
            } />

            <Route exact path="/postblog" render={
              (props) => {
                return (auth.isAuthenticated()) ? (
                  <CreatePost auth={auth} {...props} />
                ) : (
                    <Redirect to="/" />
                  )

              }
            } />

            <Route exact path="/admin" render={
              (props) => {
                return (auth.isAuthenticated()) ? (
                  <Admin auth={auth} {...props} />
                ) : (
                    <Redirect to="/" />
                  )

              }
            } />

            <Route exact path="/callback" render={
              (props) => {
                auth.handleAuthentication(props);
                return <Callback {...props} />
              }
            } />


          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;