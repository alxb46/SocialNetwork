import React, { useEffect } from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "@reduxjs/toolkit";

const ProfileContainer = (props) => {
    const { userId } = useParams();
    const finalUserId = userId || 31872;

    useEffect(() => {
        props.getUserProfile(finalUserId);
        props.getStatus(finalUserId);
    }, [props.getUserProfile, props.getStatus, finalUserId, props]);

    return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withAuthRedirect
)(ProfileContainer);
