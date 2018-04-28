import React from "react";
import fx from "../../fx";




class ChecklistNotes extends React.Component {

    
    renderNote(note){
        console.log("Note render", note)

        return(
            <fx.UI.BS.Card key={note.key} className="col w-25">
                 <fx.UI.BS.CardBody>
                     <fx.UI.BS.CardTitle>
                        {note.title}    
                    </fx.UI.BS.CardTitle>
                    <fx.UI.BS.CardText>
                        {note.body}    
                    </fx.UI.BS.CardText>
                </fx.UI.BS.CardBody>
            </fx.UI.BS.Card>
        )
    }




    render(){

        return(<div>NOTES</div>)

/*
        return(
            <div className="container-fluid d-flex flex-wrap">
            
                {
                    fx._.flatMap(
                        this.props.notes, 
                        (note) => this.renderNote(note)
                    )
                }
            </div>
        )
*/
        
    }
}


export default ChecklistNotes;


