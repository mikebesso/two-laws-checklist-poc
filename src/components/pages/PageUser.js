import React from "react";


import { connect } from "react-redux";






//import actions from "../../actions/index";
import userUI from "../UserUI";


class PageUser extends React.Component {


    static routes = {
        signIn: "/user/signin",
        signOut: "/user/signout",
        signUp: "/user/signup",
        forgot: "/user/forgot",
        account: "/user/account",
    }

    render(){

        const componentName = this.props.match.params.component.toLowerCase();


        switch (componentName){
            case "signin": return(<userUI.component.SignIn />);
            case "signup": return(<userUI.component.SignUp />);
            case "forgot": return(<userUI.component.Forgot />);
            case "account": return(<userUI.component.Account />);
            default: return(<userUI.component.SignUp />);
        }
    }
}


/*
const mapStateToProps = (state) => (
    {
        isLoaded: state.isLoaded
    } 
);

const mapDispatchToProps = dispatch => {
    return(
        bindActionCreators(
            {
                ...actions
            },
            dispatch
        )
    );
}

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(PageUser));
*/

export default connect()(PageUser);

