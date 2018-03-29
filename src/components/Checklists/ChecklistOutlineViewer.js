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

class ChecklistOutlineViewer extends Component {

    
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

        const { checklist } = this.props;


        return(
            <div>
                {this.renderSteps(checklist.steps)}
            </div>
        )

        
    }
}


export default ChecklistOutlineViewer;


