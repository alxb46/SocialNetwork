import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        })
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }

    }

    render() {
        return (
            <>
                <div className={styles.profileStatusContainer}>
                    {
                        !this.state.editMode
                        ? <span className={styles.profileStatusTitle} onClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                        : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode } value={this.state.status}></input>
                    }
                </div>
            </>

        );
    }

}

export default ProfileStatus;