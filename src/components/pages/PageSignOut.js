import React from "react";
import fx from "../../fx";

import * as Bloomer from "bloomer";

class PageSignOut extends React.Component {

    static Location = () => {
        return("signOut", {})
    }
    static Href = () => {
        const href = fx.HashRouter.BuildHREF("signOut");
        return(href);
    }

    render = () => {
    
        return (
        <Bloomer.Button onClick={this.props.signOut()}>
            Sign Out

        </Bloomer.Button>
        )
    }
}






const mapStateToProps = (state) => (
    {
        firebase: state.firebase
    } 
  );
  
  
  
export default fx.AppStore.Connect(mapStateToProps)(PageSignOut);
  
  
