import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserUI from "../UserUI";

import UI from "../UI";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



  class NavTop extends React.Component {

    render(){
      return(
        <UI.MenuBar>
          <NavItem>
            <NavLink tag={Link} to="/control-panel">Control Panel</NavLink>
          </NavItem>
          <NavItem>
            <UserUI.component.UserButton />
          </NavItem>
        </UI.MenuBar>
      )
    }
  }

/*

class NavTop extends React.Component {
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
                <UserUI.component.UserButton />
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


export default connect(mapStateToProps)(withRouter(NavTop));


*/

export default NavTop;