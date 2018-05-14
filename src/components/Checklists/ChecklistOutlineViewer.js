import React from "react";
import fx from "../../fx";






class ChecklistOutlineViewer extends React.Component {

    
    renderSteps = (steps) => {
        
        return(
            <ul>
                {
                    fx._.flatMap(steps, this.renderStep)
                }
            </ul>

        )
    }

    renderStep = (d, i) => {
        return(
            <li key={d.key}>
                <fx.UI.MediaLeft>
                    <fx.UI.Icon isSize="large" className="fs fa-thumbsup"/>
                </fx.UI.MediaLeft>
                <fx.UI.Media>
                    <fx.UI.MediaContent>
                        <div>{d.title}</div>
                        <div>{d.description}</div>
                    </fx.UI.MediaContent>
                </fx.UI.Media>
                
                {fx._.has(d, "steps") ? this.renderSteps(d.steps) : null}

            </li>
        )
    }


    render = () => {

        const { checklist } = this.props;
        return(
            <fx.UI.Container>
                {this.renderSteps(checklist.steps)}
            </fx.UI.Container>
        )

        
    }
}


export default ChecklistOutlineViewer;


