import React from "react";
import fx from "../../fx";
import UserUI from "../UserUI";
import {Navbar, NavbarBrand, NavbarBurger, NavbarStart, NavbarItem, NavbarLink, NavbarEnd, NavbarMenu, NavbarDropdown, NavbarDivider, Field, Control, Button, Icon} from "bloomer";

import PageControlPanel from "../pages/PageControlPanel";


//import UserUI from "../UserUI";
import "bulma/css/bulma.css"



  class NavTop extends React.Component {

    onClickNav = () => {}

    render(){

      const props = this.props;

return(
      <Navbar 
        style={{ border: 'solid 1px #00D1B2', margin: '0' }}
      >
      <NavbarBrand>
          <NavbarItem>
              <img src="/pathtoimg" style={{ marginRight: 5 }} alt=""/> Bloomer
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <Icon className='fa fa-github' />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
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
              <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
                  <Icon className='fa fa-github' />
              </NavbarItem>
              <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
                  <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
              </NavbarItem>
              <NavbarItem>
                  <Field isGrouped>
                      <Control>
                          <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                          data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                          a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                              <Icon className="fa fa-twitter" />
                              <span>Tweet</span>
                          </Button>
                      </Control>
                  </Field>
              </NavbarItem>
              <UserUI.NavbarUser />
          </NavbarEnd>
      </NavbarMenu>
      </Navbar>
)
      /*
      return(
        <fx.UI.MenuBar>
          <fx.UI.BS.NavItem>
            <fx.UI.BS.NavLink  href={fx.HashRouter.BuildHREF("controlPanel")}>Control Panel</fx.UI.BS.NavLink>
          </fx.UI.BS.NavItem>
          <fx.UI.BS.NavItem>
            <UserUI.component.UserButton />
          </fx.UI.BS.NavItem>
        </fx.UI.MenuBar>
       
      ) */
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