import React, {Component} from 'react';
import ChecklistList from '../components/ChecklistList';




class PageChecklists extends Component {

    render(){
        return(
            <main className = "holygrail-main col-lg-7 col-xxl-9">
                <ChecklistList />
            </main>
        )
    }
}

export default PageChecklists;