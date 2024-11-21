import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

    async componentDidMount() {
        let userId = this.props.userId;
        console.log(userId);
        if (!userId){
            userId = 2;
        }
        await axios.get(`/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
            .catch(error => console.error(error));
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

    const userId = useParams().userId;  //
    debugger;
    return <ProfileContainer {...props} userId={userId} />;};

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainerUrl);