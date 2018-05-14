import React from "react";
import fx from "../../fx";

import ChecklistViewer from '../Checklists/ChecklistViewer';
import * as Bloomer from "bloomer";



class PageChecklist extends React.Component {

    static Location = (id) => {
        return("checklist", {id})
    }
    static Href = (id) => {
        const href = fx.HashRouter.BuildHREF("checklist", {id}) ;
        return(href);
    }

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

export default fx.AppStore.Connect()(PageChecklist);