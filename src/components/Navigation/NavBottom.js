import React from "react";
import fx from "../../fx";



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
        <fx.UI.BS.Navbar className="bg-primary text-white" dark expand="md">
          <fx.UI.BS.NavbarBrand href="/">two-laws checklists</fx.UI.BS.NavbarBrand>
          <fx.UI.BS.NavbarToggler onClick={this.toggle} />
          <fx.UI.BS.Collapse isOpen={this.state.isOpen} navbar>
            <fx.UI.BS.Nav className="ml-auto" navbar>
              <fx.UI.BS.NavItem>
                <fx.UI.BS.NavLink href="https://github.com/mikebesso/two-laws-checklist-poc" target="_new">Github</fx.UI.BS.NavLink>
              </fx.UI.BS.NavItem>
            </fx.UI.BS.Nav>
          </fx.UI.BS.Collapse>
        </fx.UI.BS.Navbar>
    );
  }
}




const mapStateToProps = (state) => (
  {
      authUser: state.user,
      firebase: state.firebase
  } 
);


export default fx.AppStore.Connect(mapStateToProps)(NavBottom);


