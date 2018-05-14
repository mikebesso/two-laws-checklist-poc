import React from "react";
import fx from "../../fx";



//import actions from "../../store/actions";


import ChecklistOutlineViewer from "./ChecklistOutlineViewer";
import ChecklistStepperViewer from "./ChecklistStepperViewer";
import ChecklistNotes from "./ChecklistNotes";


import TagCloud from '../TagCloud';

class ChecklistViewer extends React.Component {

    constructor(props){
        super(props);
    }


    componentDidMount() {
        this.props.loadChecklists();
    }


    

    render(){


        const { checklists, isLoaded, checklistId } = this.props;

        
        if (!isLoaded.checklists){
            return(<div>loading</div>)
        }
        
        const checklist = checklists[checklistId];

        if (!checklist){
            return(<div>checklist {checklistId} not found</div>)
        }


        return(
            <div>

                <h1>
                    {checklist.title} 
                </h1>

                <h2>Description</h2>
                {checklist.description}
                
                {
                    checklist["tags"]
                    ? <fx.UI.TagCloud tags={checklist.tags} />
                    : null
                }


                <fx.UI.TabSet>
                    <ChecklistNotes tabTitle="Notes" notes={checklist.notes}/>
                    <ChecklistOutlineViewer tabTitle="Outline" checklist={checklist}/>
                    <ChecklistStepperViewer tabTitle="Stepper" checklist={checklist}/>
                </fx.UI.TabSet>

            </div>
        )
/*        
        <ChecklistNotes tabTitle="Notes" notes={checklist.notes}/>
        <ChecklistOutlineViewer tabTitle="Outline" checklist={checklist}/>
        <ChecklistStepperViewer tabTitle="Stepper" checklist={checklist}/>
  */      
    }
}



const mapStateToProps = (state) => (
    {
        checklists: state.checklists,
        isLoaded: state.isLoaded,
        hashRouter: state.hashRouter
    } 
);

/*
const mapDispatchToProps = dispatch => {
    return(
        fx.bindActionCreators(
            {
                ...actions
            },
            dispatch
        )
    );
}
*/
export default fx.AppStore.Connect(mapStateToProps)(ChecklistViewer);


