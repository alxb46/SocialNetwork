import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/icon.png";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(error => console.error(error));
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`/api/1.0/users?page=${pageNumber}&count=${this.props.count}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
            .catch(error => console.error(error));
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(page => {
                        return (
                            <span className={this.props.currentPage === page && styles.selectedPage}
                            onClick={(e) => {this.onPageChanged(page)}}>{page}</span>
                        );
                    })}
                </div>
                {
                    this.props.users.map(user => <div key={user.id} className={styles.userContainer}>
                    <span>
                        <div className={styles.userBodyContainer}>
                            <img
                                className={styles.userPhoto}
                                src={user.photos.small != null ? user.photos.small : userPhoto}
                                alt="user-image"
                            />
                        </div>
                        <div className={styles.userBodyContainer}>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollowUser(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.followUser(user.id)
                                }}>Follow</button>
                            }

                        </div>
                    </span>
                        <div className={styles.userInfoContainer}>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;