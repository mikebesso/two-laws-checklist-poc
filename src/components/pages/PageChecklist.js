import React from "react";
import fx from "../../fx";

import ChecklistViewer from '../Checklists/ChecklistViewer';




class Page extends React.Component {

    static PageKey = "checklist";
    static Location = (id) => ({name: Page.PageKey, options: {id:id}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {id});
    static Route = '/checklist/:id';
    static RequiresAuthentication = true;

    renderContentsOrLoading = (key) => {
        if (key){
            return(<ChecklistViewer key={key}/>)
        } else {
            return(<fx.UI.Loading />)
        }

    }

    render(){
        
        const checklistId = this.props.hashRouter.location.options.id;

        return(
            <fx.UI.Container>
                <ChecklistViewer checklistId={checklistId} />
            </fx.UI.Container>
        )
    }
}




const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.AddPage(Page, ConnectedPage);
export default ConnectedPage;


