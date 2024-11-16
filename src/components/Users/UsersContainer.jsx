import {connect} from "react-redux";
import {
    followUser,
    unfollowUser,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,

} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
            .catch(error => console.error(error));
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`/api/1.0/users?page=${pageNumber}&count=${this.props.count}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
            .catch(error => console.error(error));
    }
    render() {

        return (
            <>
                { this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}
                       onPageChanged={this.onPageChanged}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(follow(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollow(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCount(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching));
        }
    }
}
*/
export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
}) (UsersContainer);