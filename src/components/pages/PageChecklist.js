import React from "react";
import fx from "../../fx";

import ChecklistViewer from '../Checklists/ChecklistViewer';
import * as Bloomer from "bloomer";



class PageChecklist extends React.Component {

    static Location = (id) => {
        return("checklist", {id})
    }
    static Href = () => {
        const href = fx.HashRouter.BuildHREF("checklist");
        return(href);
    }

    render(){
        
        return(
            <Bloomer.Container>
                <ChecklistViewer />
            </Bloomer.Container>
        )
    }
}

export default fx.AppStore.Connect()(PageChecklist);