import React, {Component} from 'react';
import ChecklistViewer from '../Checklists/ChecklistViewer';




class PageChecklist extends Component {


    render(){
        return(
            <main className = "holygrail-main col-lg-7 col-xxl-9">
                <h1>CHECKLISTS</h1>
                <ChecklistViewer />
            </main>
        )
    }
}

export default PageChecklist;