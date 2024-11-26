import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authApi} from "../../api/api";

function HeaderContainer(props) {

    useEffect(() => {
        authApi.getAuth(props.setAuthUserData);
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