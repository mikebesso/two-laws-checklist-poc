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

    SignOut = () => {
        fx.Firebase.SignOut()
    }

    render = () => {
        return (
            <Bloomer.Button onClick={this.SignOut}>
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
  
  
