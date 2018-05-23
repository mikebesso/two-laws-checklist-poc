import React from "react";
import fx from "../../fx";




class Page extends React.Component {

    static PageKey = "notFound";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = true;
  
    static Title = "Not Found";    

    render = () => {
        
        return(
            <div>Not Found</div>
        )
    }

}






const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.Pages.add(Page, ConnectedPage);
export default ConnectedPage;
