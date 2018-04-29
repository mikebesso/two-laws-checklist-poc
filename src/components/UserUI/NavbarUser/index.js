import React from "react";
import fx from "../../../fx";

import * as Bloomer from "bloomer";

import Pages from "../../pages";


class NavbarUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle() {
      console.log("toggle", this.state.isOpen)
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {

    debugger
     
    if (this.props.firebase.user) {
        return(
            <Bloomer.NavbarItem hasDropdown isHoverable>
                <Bloomer.NavbarLink href="#">{this.props.user.name}</Bloomer.NavbarLink>
                <Bloomer.NavbarDropdown>
                    <Bloomer.NavbarItem href={Pages.signOut.Href()}>Sign out</Bloomer.NavbarItem>
                    <Bloomer.NavbarItem href="#">Profile</Bloomer.NavbarItem>
                </Bloomer.NavbarDropdown> 
            </Bloomer.NavbarItem>
        )

    } else {

        return(
            <Bloomer.NavbarItem hasDropdown isHoverable>
                <Bloomer.NavbarLink href={Pages.signIn.Href()}>Sign In</Bloomer.NavbarLink>
                <Bloomer.NavbarDropdown>
                    <Bloomer.NavbarItem href="#">Abount</Bloomer.NavbarItem>
                    <Bloomer.NavbarItem href="#">Contact</Bloomer.NavbarItem>
                </Bloomer.NavbarDropdown> 
            </Bloomer.NavbarItem>

        )

    }


 
  }
}




const mapStateToProps = (state) => (
  {
      user: state.user,
      firebase: state.firebase
  } 
);


  
export default fx.AppStore.Connect(mapStateToProps)(NavbarUser);


