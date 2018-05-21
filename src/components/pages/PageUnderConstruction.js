import React from "react";
import fx from "../../fx";
import * as Bloomer from "bloomer"


import FontAwesome from '../FontAwesome';

class Page extends React.Component {

    static PageKey = "underConstruction";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = false;

    render = () => {
        
        return(
            <div>Under Construction</div>
        )
    }

}






const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.Pages.add(Page, ConnectedPage);
export default ConnectedPage;
