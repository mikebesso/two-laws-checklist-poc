import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavLeft extends React.Component {
    render() {
      return (
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Today</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">This Week</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">This Month</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">This Quarter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">All</NavLink>
            </NavItem>
          </Nav>
      );
    }
  }