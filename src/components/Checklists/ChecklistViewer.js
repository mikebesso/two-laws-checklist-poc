



import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Media, ListGroup, ListGroupItem } from "reactstrap";

import Stepper from "../UI/Stepper";

import _ from "lodash";

import icon from "../../img/arrow-alt-circle-right.svg";
import actions from "../../actions";
import UI from "../UI";
import * as BS from "reactstrap";

import ChecklistOutlineViewer from "./ChecklistOutlineViewer";
import ChecklistStepperViewer from "./ChecklistStepperViewer";

class ChecklistViewer extends Component {

    constructor(props){
        super(props);

        this.key = this.props.match.params.key;

    }


    componentDidMount() {
        this.props.loadChecklists();
    }


    

    render(){


        const { checklists, isLoaded } = this.props;


        if (!isLoaded.checklists){
            return(<div>loading</div>)
        } else {
            const checklist = checklists[this.key];
            return(
                <div>

                    <h1>
                        {checklist.title} 
                    </h1>

                    <h2>Description</h2>
                    {checklist.description}
                    
                    <UI.Tabs>
                        <ChecklistOutlineViewer tabTitle="Outline" checklist={checklist}/>
                        <ChecklistStepperViewer tabTitle="Stepper" checklist={checklist}/>
                    </UI.Tabs>

               </div>
            )
        }
        
    }
}



const mapStateToProps = (state) => (
    {
        checklists: state.checklists,
        isLoaded: state.isLoaded
    } 
);

const mapDispatchToProps = dispatch => {
    return(
        bindActionCreators(
            {
                ...actions
            },
            dispatch
        )
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChecklistViewer));


