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

class ChecklistStepperViewer extends Component {
    
  
    continueStep(){

    }
    backStep(){
        
    }

    render(){


        const Steps = {
            'editable': [
                {
                'title': (<div>Select campaign settings</div>),
                'content': (<div className={'e-caption'}>Campaign settings</div>)
                },
                {
                'title': (<div>Create an ad group</div>),
                'optional': (<div>Optional</div>),
                'content': (<div className={'e-caption'}>Ad group</div>)
                },
                {
                'title': (<div>Create an ad</div>),
                'content': (<div className={'e-caption'}>Ad details</div>)
                },
                {
                'title': (<div>Select campaign settings</div>),
                'content': (<div className={'e-caption'}>Campaign settings</div>)
                },
                {
                'title': (<div>Create an ad group</div>),
                'optional': (<div>Optional</div>),
                'content': (<div className={'e-caption'}>Ad group</div>)
                },
                {
                'title': (<div>Create an ad</div>),
                'content': (<div className={'e-caption'}>Ad details</div>)
                },
                {
                'title': (<div>Create an ad group</div>),
                'optional': (<div>Optional</div>),
                'content': (<div className={'e-caption'}>Ad group</div>)
                },
                {
                'title': (<div>Create an ad</div>),
                'content': (<div className={'e-caption'}>Ad details</div>)
                },
                {
                'title': (<div>Select campaign settings</div>),
                'content': (<div className={'e-caption'}>Campaign settings</div>)
                },
                {
                'title': (<div>Create an ad group</div>),
                'optional': (<div>Optional</div>),
                'content': (<div className={'e-caption'}>Ad group</div>)
                },
                {
                'title': (<div>Create an ad</div>),
                'content': (<div className={'e-caption'}>Ad details</div>)
                }                       
            ],
            'non-editable': [
                {
                'title': (<div>Select campaign settings</div>),
                'content': (<div className={'e-caption'}>Campaign settings</div>)
                },
                {
                'title': (<div>Create an ad group</div>),
                'content': (<div className={'e-caption'}>Ad group</div>)
                },
                {
                'title': (<div>Create an ad</div>),
                'content': (<div className={'e-caption'}>Ad details</div>)
                },
                {
                'content': (<div className={'e-caption'}>Summary</div>)
                }
            ]
        };


        return(

            <Stepper tabTitle="Stepper" editable={true} steps={Steps['editable']} onContinue={() => this.continueStep()} onBack={() => this.backStep()} type="vertical" />

        )

       
        
    }
}



export default ChecklistStepperViewer;


