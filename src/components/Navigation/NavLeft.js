import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";


import PageUser from "../pages/PageUser";



class NavLeft extends React.Component {

    constructor(props){
        super(props)
    }


    render() {

      const user = this.props.firebase.user ?   this.props.firebase.user.displayName: "Unknown";

      return (
        <div>
            the left side will provide context sensitive actions

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


