
import React, {fx} from "../../fx";


import actions from "../../actions";


import ChecklistOutlineViewer from "./ChecklistOutlineViewer";
import ChecklistStepperViewer from "./ChecklistStepperViewer";
import ChecklistNotes from "./ChecklistNotes";


import TagCloud from '../TagCloud';

class ChecklistViewer extends React.Component {

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
                    
                    {
                        checklist["tags"]
                        ? <TagCloud tags={checklist.tags} />
                        : null
                    }


                    <fx.UI.Tabs>
                        <ChecklistNotes tabTitle="Notes" notes={checklist.notes}/>
                        <ChecklistOutlineViewer tabTitle="Outline" checklist={checklist}/>
                        <ChecklistStepperViewer tabTitle="Stepper" checklist={checklist}/>
                    </fx.UI.Tabs>

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
        fx.bindActionCreators(
            {
                ...actions
            },
            dispatch
        )
    );
}

export default fx.connect(mapStateToProps, mapDispatchToProps)(fx.withRouter(ChecklistViewer));


