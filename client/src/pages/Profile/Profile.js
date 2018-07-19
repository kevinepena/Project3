import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {

  state = {
    profile: {},
    admin: false
  }
  // componentWillMount() {
  //   this.setState({ profile: {} });


  // }

  componentDidMount() {
    const { userProfile, getProfile } = this.props.auth;

    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }

    this.checkAdmin();
  }

  checkAdmin = () => {
    console.log(this.state.profile["http://app/app_metadata"])
  }

  // getUserData = () => {
  //   axios.get("https://kevpen.us.webtask.io/adf6e2f2b84784b57522e3b19dfc9201/api/users", this.getAccessToken)
  //   .then(res => console.log(res)).catch(err => console.log(err));
  // }
  
  render() {

    const { profile } = this.state;

    console.log(profile["http://app/app_metadata"])
    return (
<div>
          <h1>{profile.given_name}</h1>
          {/* <p> {profile["http://app/app_metadata"]} </p> */}
            {/* <img src={profile.picture} alt="profile" /> */}
            <div>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
            {/* {(profile["http://app/app_metadata"].authorization.roles[0] === ("Admin")) ? <button>Admin</button> : "" }
         */}
        </div>

    );
  }
}

export default Profile;
