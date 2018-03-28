import React, {Component} from 'react';
import ChecklistList from '../Checklists/ChecklistList';




class PageChecklists extends Component {

    render(){
        return(
            <main className = "holygrail-main col-lg-7 col-xxl-9">
                            <h1>CHECKLISTS</h1>

                <ChecklistList />
            </main>
        )
    }
}

export default PageChecklists;