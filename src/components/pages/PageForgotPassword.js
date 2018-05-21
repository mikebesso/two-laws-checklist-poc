import React from "react";
import fx from "../../fx";


class Page extends React.Component {

    static PageKey = "forgot";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = true;

    render = () => <div> forgot here </div>
}



const mapStateToProps = (state) => (
    {
    } 
);



const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.Pages.add(Page, ConnectedPage);
export default ConnectedPage;