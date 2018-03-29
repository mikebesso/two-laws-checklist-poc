import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';


/*
    Usage:

        <MenuBar homePath="/" homeText="Home">
            <NavBarItem />
        </MenuBar>
*/


class MenuBar extends Component {

    static defaultProps = {
        homePath: "/user/signin",
        homeText: "Home"
    }

    static propTypes = {
        homePath: PropTypes.string.isRequired,
        homeText: PropTypes.string.isRequired
    }

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
          <NavbarBrand tag={Link} to={this.props.homePath}>{this.props.homeText}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                {this.props.children}
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}




export default MenuBar;