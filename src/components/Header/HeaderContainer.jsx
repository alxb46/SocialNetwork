import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

function HeaderContainer(props) {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true})
            .then(response => {
                console.log(response.data);
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    props.setAuthUserData(id, email, login);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, [props]);


    return (
        <Header {...props}/>
    );


}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);