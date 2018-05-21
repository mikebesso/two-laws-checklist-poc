import React from "react";
import fx from "../../fx";


import ChecklistList from '../Checklists/ChecklistList';


class Page extends React.Component {

    static PageKey = "checklists";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = true;


    render(){
        return(
            <main className = "page-checklists holygrail-main col-12 container">
                            <h1>CHECKLISTS</h1>

                <ChecklistList />
            </main>
        )
    }
}

const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.Pages.add(Page, ConnectedPage);
export default ConnectedPage;