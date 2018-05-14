import React from "react";
import fx from "../../fx";




class ChecklistNotes extends React.Component {

    
    renderNote(note){
        console.log("Note render", note)

        return(
            
            <fx.UI.Message key={note.key}>
                <fx.UI.MessageHeader>
                        {note.title}    
                </fx.UI.MessageHeader>
                <fx.UI.MessageBody>
                    {note.body}    
                </fx.UI.MessageBody>
            </fx.UI.Message>
        )
    }




    render(){

        return(
            <fx.UI.Container>
            
                {
                    fx._.flatMap(
                        this.props.notes, 
                        (note) => this.renderNote(note)
                    )
                }
            </fx.UI.Container>
        )
        
    }
}


export default ChecklistNotes;


