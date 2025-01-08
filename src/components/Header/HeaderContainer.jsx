import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

function HeaderContainer(props) {

    useEffect(() => {
        props.getAuthUserData();
    }, [props]);


    return (
        <Header {...props}/>
    );


}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);