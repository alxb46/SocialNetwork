import {Component} from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export const withAuthRedirect = (WrappedComponent) => {

    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuthenticated) {
                return <Navigate to={'/login'}/>;
            }
            return <WrappedComponent {...this.props} />;
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}