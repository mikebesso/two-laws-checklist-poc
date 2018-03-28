import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { isUndefined } from "util";

import { Media, ListGroup, ListGroupItem } from "reactstrap";
import { Link, withRouter } from 'react-router-dom';
import _ from "lodash";


import actions from "../../actions/index";

import icon from "../../img/arrow-alt-circle-right.svg";

class ChecklistList extends React.Component {

    constructor(props){
        super(props);

     }

    componentDidMount() {
        this.props.loadChecklists();
    }


    renderItem(d, i){
        console.log("renderItem", i, d, d.id);
            return(
            <ListGroupItem key={d.key} onClick={() => this.props.history.push(`/checklist/${d.key}`)} action>
        
                <Media>
                    <Media left href="#" >
                        <Media object src = {`${icon}`} alt="image" width="60px"/>
                    </Media>
                    <Media body>
                        <Media heading>{d.title}</Media>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChecklistList));
