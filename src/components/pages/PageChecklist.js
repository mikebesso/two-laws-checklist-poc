import React, {Component} from 'react';

import ChecklistViewer from '../Checklists/ChecklistViewer';




class PageChecklist extends Component {


    render(){
        return(
            <main className = "holygrail-main col-12 container-fluid">
                <ChecklistViewer />
            </main>
        )
    }
}

export default PageChecklist;