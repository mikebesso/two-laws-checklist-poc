import React, {fx} from "../../fx";


import UserUI from "../UserUI";


  class NavTop extends React.Component {

    render(){
      return(
        <fx.UI.MenuBar>
          <fx.UI.BS.NavItem>
            <fx.UI.BS.NavLink tag={fx.Link} to="/control-panel">Control Panel</fx.UI.BS.NavLink>
          </fx.UI.BS.NavItem>
          <fx.UI.BS.NavItem>
            <UserUI.component.UserButton />
          </fx.UI.BS.NavItem>
        </fx.UI.MenuBar>
      )
    }
  }


export default NavTop;