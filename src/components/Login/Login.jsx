import React from 'react';
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from './Login.module.css';
import imgSrc from '../../assets/images/rb_62407.png';

const Login = (props) => {

    if (props.isAuthenticated) {
        return (
            <Navigate to={'/profile'}/>
        );
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.imgBackground} src={imgSrc} alt="user-image"/>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    <h1>Login</h1>
                    <LoginForm login={props.login}/>
                </div>

            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login}) (Login);