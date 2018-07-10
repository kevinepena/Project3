import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Auth from "./auth/Auth";
import history from "./history";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatPost";
import { Forum, EditForum } from "./pages/Forum";
import Footer from "./components/Footer";
import Callback from "./pages/Callback";
import Profile from "./pages/Profile";

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
              path="/createpost"
              render={props => {
                return auth.isAuthenticated() &&
                  auth.userHasScopes(["write:blog"]) ? (
                  <CreatePost auth={auth} {...props} />
                ) : (
                  <Redirect to="/home" />
                );
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
              path="/editforum"
              render={props => {
                return auth.isAuthenticated() &&
                  auth.userHasScopes(["write:blog"]) ? (
                  <EditForum auth={auth} {...props} />
                ) : (
                  <Redirect to="/forum" />
                );
              }}
            />
            <Route
              exact
              path="/profile"
              render={props => {
                return auth.isAuthenticated() ? (
                  <Profile auth={auth} {...props} />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />

            <Route
              path="/callback"
              render={props => {
                auth.handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
