import React from "react";
import fx from "../../fx";
import UserUI from "../UserUI";
import {Navbar, NavbarBrand, NavbarBurger, NavbarStart, NavbarItem, NavbarLink, NavbarEnd, NavbarMenu, NavbarDropdown, NavbarDivider} from "bloomer";

import PageControlPanel from "../pages/PageControlPanel";


//import UserUI from "../UserUI";
import "bulma/css/bulma.css"



  class NavTop extends React.Component {

    onClickNav = () => {}

    render(){

      

return(
      <Navbar 
        style={{ border: 'solid 1px #00D1B2', margin: '0' }}
      >
      <NavbarBrand>
          <NavbarItem>
            <fx.UI.IconBrand icon="facebook" size={2} />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <fx.UI.IconBrand icon="github" size={2} />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <fx.UI.IconBrand icon="twitter"  size={2} />
          </NavbarItem>
          <NavbarBurger isActive={true} onClick={this.onClickNav} />
      </NavbarBrand>
      <NavbarMenu isActive={true} onClick={this.onClickNav}>
          <NavbarStart>
              <NavbarItem href='#/'>Home</NavbarItem>
              <NavbarItem hasDropdown isHoverable>
                  <NavbarLink href='#/documentation'>Documentation</NavbarLink>
                  <NavbarDropdown>
                      <NavbarItem href={PageControlPanel.Href()}>Control Panel</NavbarItem>
                      <NavbarItem href='#/'>Two B</NavbarItem>
                      <NavbarDivider />
                      <NavbarItem href='#/'>Two A</NavbarItem>
                  </NavbarDropdown>
              </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
              <NavbarItem href="https://github.com/mikebesso" isHidden='touch'>
                <fx.UI.IconBrand icon="github" size={2} />
              </NavbarItem>
              <NavbarItem>
                <fx.UI.LinkedinShareButton />
              </NavbarItem>
              <NavbarItem>
                  <fx.UI.TwitterShareButton />
              </NavbarItem>
              <UserUI.NavbarUser />
          </NavbarEnd>
      </NavbarMenu>
      </Navbar>
)

    }
  }


  const mapStateToProps = (state) => (
    {
        checklists: state.checklists,
        user: state.user,
        isLoaded: state.isLoaded,
        hashRouter: state.hashRouter
          
    } 
);  

export default fx.AppStore.Connect(mapStateToProps)(NavTop);