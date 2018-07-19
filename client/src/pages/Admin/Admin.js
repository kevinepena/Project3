import React, { Component } from "react";
import axios from "axios";

class Admin extends Component {

    state = {
        profile: {},
        token: ""
    };

    componentWillMount() {

        const { userProfile, getProfile, getMetadata } = this.props.auth;

        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }

    }




    render() {
        const { profile } = this.state;

        // console.log(profile["http://app/app_metadata"]);


        console.log(this.state)
        return (
            <div>
                <h1>{profile.given_name}</h1>
                <p>{} </p>
                {/* <img src={profile.picture} alt="profile" /> */}
                <div>
                    <h3>{profile.nickname}</h3>
                </div>
                {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
                <button onClick={this.getMetadata}>getMetadata</button>
            </div>

        );
    }
}

export default Admin;
