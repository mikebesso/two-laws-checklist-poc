import React, {Component} from 'react';
import ChecklistList from '../Checklists/ChecklistList';




class PageChecklists extends Component {

    render(){
        return(
            <main className = "holygrail-main col-12 container">
                            <h1>CHECKLISTS</h1>

                <ChecklistList />
            </main>
        )
    }
}

export default PageChecklists;