import React, {Component} from 'react';
import ChecklistViewer from '../components/ChecklistViewer';




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