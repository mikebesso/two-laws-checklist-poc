import React from "react";
import fx from "../../fx";



//import FontAwesome, {icons} from '../FontAwesome'


class Page extends React.Component {

    static PageKey = "controlPanel";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = true;


    render() {
        return (
            <main className = "page-control-panel holygrail-main col-12 container">

                <fx.UI.BS.Button onClick={() => {this.props.reinitializeChecklists()}}>Reinitialize</fx.UI.BS.Button>

                <fx.UI.BS.NavLink href="https://console.firebase.google.com" target="firebase">Firebase</fx.UI.BS.NavLink>

            </main>

        )
    }


}



const mapStateToProps = (state) => (
    {
    } 
);



const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.Pages.add(Page, ConnectedPage);
export default ConnectedPage;




