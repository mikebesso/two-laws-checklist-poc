import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';

class NavBottom extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar className="bg-primary text-white" dark expand="md">
          <NavbarBrand href="/">two-laws checklists</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/mikebesso/two-laws-checklist-poc" target="_new">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}




const mapStateToProps = (state) => (
  {
      authUser: state.user,
      firebase: state.firebase
  } 
);


export default connect(mapStateToProps)(withRouter(NavBottom));


