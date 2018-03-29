import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import * as BS from 'reactstrap';


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
        <BS.Navbar className="bg-primary text-white" dark expand="md">
          <BS.NavbarBrand tag={Link} to={this.props.homePath}>{this.props.homeText}</BS.NavbarBrand>
          <BS.NavbarToggler onClick={this.toggle} />
          <BS.Collapse isOpen={this.state.isOpen} navbar>
            <BS.Nav className="ml-auto" navbar>
                {this.props.children}
            </BS.Nav>
          </BS.Collapse>
        </BS.Navbar>
    );
  }
}




export default MenuBar;