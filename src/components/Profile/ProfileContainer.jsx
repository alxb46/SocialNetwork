import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {profileApi} from "../../api/api";

class ProfileContainer extends React.Component {

     componentDidMount() {
        let userId = this.props.userId;
        console.log(userId);
        if (!userId){
            userId = 2;
        }

        profileApi.getProfile(this.props.setUserProfile, userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const ProfileContainerUrl = (props) => {

    const userId = useParams().userId;
    return <ProfileContainer {...props} userId={userId} />;};

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainerUrl);