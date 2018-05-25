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

                <fx.UI.Button onClick={() => {this.props.reinitializeChecklists()}}>Reinitialize</fx.UI.Button>

                <a href="https://console.firebase.google.com" target="firebase">Firebase</a>

            </main>

        )
    }


}



const mapStateToProps = (state) => (
    {
        firebase: state.firebase
    } 
);



const ConnectedPage = fx.AppStore.Connect(mapStateToProps)(Page);
fx.UI.AddPage(Page, ConnectedPage);
export default ConnectedPage;




