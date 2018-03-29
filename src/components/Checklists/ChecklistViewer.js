import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Media, ListGroup, ListGroupItem } from "reactstrap";

import _ from "lodash";

import icon from "../../img/arrow-alt-circle-right.svg";
import actions from "../../actions";

class ChecklistViewer extends Component {

    constructor(props){
        super(props);

        this.key = this.props.match.params.key;

    }

    componentDidMount() {
        this.props.loadChecklists();
    }

    renderSteps(steps){
        return(
            <div>
                <ListGroup>
                    {
                        _.flatMap(steps, this.renderStep.bind(this))
                    }
                    
                </ListGroup>

            </div>
        )
    }

    renderStep(d, i){


        return(
            <ListGroupItem key={d.key} action>
                <Media>
                    <Media heading>{d.title}</Media>
                    <Media body>
                        {d.description}
                    </Media>
                </Media>
                
                {_.has(d, "steps") ? this.renderSteps(d.steps) : null}

            </ListGroupItem>
        )
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
                {this.renderSteps(checklist.steps)}
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


