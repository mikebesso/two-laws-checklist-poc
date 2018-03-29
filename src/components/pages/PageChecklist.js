import React, {Component} from 'react';

import ChecklistViewer from '../Checklists/ChecklistViewer';




class PageChecklist extends Component {


    render(){
        return(
            <main className = "holygrail-main col-lg-7 col-xxl-9">
                <ChecklistViewer />
            </main>
        )
    }
}

export default PageChecklist;