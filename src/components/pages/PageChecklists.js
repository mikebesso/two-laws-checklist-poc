import React from "react";
import fx from "../../fx";


import ChecklistList from '../Checklists/ChecklistList';




class PageChecklists extends React.Component {

    render(){
        return(
            <main className = "page-checklists holygrail-main col-12 container">
                            <h1>CHECKLISTS</h1>

                <ChecklistList />
            </main>
        )
    }
}

export default fx.AppStore.Connect()(PageChecklists);