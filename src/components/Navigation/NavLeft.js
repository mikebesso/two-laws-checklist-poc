import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";


import SignOutButton from '../UserUI/SignOut';

//import actions from "../../actions/index";
import PageUser from "../pages/PageUser";

const NavigationAuth = () =>
  <Nav vertical>
    <NavItem><NavLink tag={Link} to="/">Landing</NavLink></NavItem>
    <NavItem><NavLink tag={Link} to="/">Home</NavLink></NavItem>
    <NavItem><NavLink tag={Link} to={PageUser.routes.account}>Account</NavLink></NavItem>
    <NavItem><SignOutButton /></NavItem>
  </Nav>

const NavigationNonAuth = () =>
  <Nav vertical>
    <NavItem><NavLink tag={Link} to="/">Landing</NavLink></NavItem>
    <NavItem><NavLink tag={Link} to={PageUser.routes.signIn}>Sign In</NavLink></NavItem>
  </Nav>


class NavLeft extends React.Component {

    constructor(props){
        super(props)
    }


    render() {

      const user = this.props.firebase.user ?   this.props.firebase.user.displayName: "Unknown";

      return (
        <div>
            <h1> User Name </h1>
            <p> { user } </p>
        

        { this.props.authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
      </div>
      );
    }
  }



const mapStateToProps = (state) => (
    {
        authUser: state.user,
        firebase: state.firebase
    } 
);


export default connect(mapStateToProps)(withRouter(NavLeft));


