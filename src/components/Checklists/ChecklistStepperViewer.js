import React from "react";
import fx from "../../fx";



class ChecklistStepperViewer extends React.Component {
    
  
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

            <fx.UI.Stepper 
                tabTitle="Stepper" 
                editable={true} 
                steps={Steps['editable']} 
                onContinue={() => this.continueStep()} 
                onBack={() => this.backStep()} 
                type="vertical" 
            />

        )

       
        
    }
}



export default ChecklistStepperViewer;


