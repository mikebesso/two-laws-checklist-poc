import React from "react";
import fx from "../../fx";

import ChecklistViewer from '../Checklists/ChecklistViewer';




class PageChecklist extends React.Component {


    render(){
        return(
            <main className = "page-checklist holygrail-main col-12 container-fluid">
                <ChecklistViewer />
            </main>
        )
    }
}

export default fx.AppStore.Connect()(PageChecklist);