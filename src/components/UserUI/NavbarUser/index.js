import React from "react";
import fx from "../../../fx";
import PageSignIn from "../../pages/PageSignIn";
import PageSignOut from "../../pages/PageSignOut";

import * as Bloomer from "bloomer";


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

    if (this.props.firebase.authenticated) {
        return(
            <Bloomer.NavbarItem hasDropdown isHoverable>
                <Bloomer.NavbarLink href="#">{this.props.firebase.name}</Bloomer.NavbarLink>
                <Bloomer.NavbarDropdown>
                    <Bloomer.NavbarItem href={PageSignOut.Href()}>Sign out</Bloomer.NavbarItem>
                    <Bloomer.NavbarItem href="#">Profile</Bloomer.NavbarItem>
                </Bloomer.NavbarDropdown> 
            </Bloomer.NavbarItem>
        )

    } else {

        return(
            <Bloomer.NavbarItem hasDropdown isHoverable>
                <Bloomer.NavbarLink href={PageSignIn.Href()}>Sign In</Bloomer.NavbarLink>
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
      firebase: state.firebase,
      hashRouter: state.hashRouter
  } 
);


  
export default fx.AppStore.Connect(mapStateToProps)(NavbarUser);


