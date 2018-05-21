import React from "react";
//import fx from "../../fx";


import { isUndefined } from "util";

import { Media, ListGroup, ListGroupItem } from "reactstrap";
//import { withRouter } from 'react-router-dom';
import _ from "lodash";



import icon from "../../img/arrow-alt-circle-right.svg";
import fx from "../../fx";
import PageChecklist from "../pages/PageChecklist";

class ChecklistList extends React.Component {


    componentDidMount() {
        this.props.loadChecklists();
    }

    NavigateToChecklist = (id) => {
        this.props.navigateTo("checklist", {id})
    }

    renderItem(d, i){
        
        
        const href = PageChecklist.Href(d.key);

        return(
            <ListGroupItem key={d.key} onClick={() => this.NavigateToChecklist(d.key)}>
        
                <Media>
                    <Media left href={href} >
                        <Media object src = {`${icon}`} alt="image" width="60px"/>
                    </Media>
                    <Media body>
                        <Media heading>{d.title} {d.key}</Media>
                        description goes here
                    </Media>
                </Media>
        
            </ListGroupItem>
        )
    }

    render() {

 
        const { checklists, isLoaded } = this.props;

        
        if (!isLoaded.checklists) {                  
            return <div>Loading...</div>;
        }

        
        if (isUndefined(checklists)){
            return <div>Undefined...</div>;
        }

        console.log("checklists", checklists)

        return (
            <ListGroup>
                {
                    _.flatMap(checklists, this.renderItem.bind(this))
                }
                
            </ListGroup>
        );
        
    }
}

const mapStateToProps = state => (
    {
        checklists: state.checklists,
        isLoaded: state.isLoaded
    }
);



export default fx.AppStore.Connect(mapStateToProps)(ChecklistList);
