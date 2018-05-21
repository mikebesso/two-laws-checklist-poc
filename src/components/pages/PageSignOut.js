import React from "react";
import fx from "../../fx";

import * as Bloomer from "bloomer";

class Page extends React.Component {

    static PageKey = "signOut";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = false;

    static Title = "Sign Out";

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
  
  
  
  const ConnectedPage = fx.AppStore.Connect()(Page);
  fx.UI.Pages.add(Page, ConnectedPage);
  export default ConnectedPage;
  
  
  
