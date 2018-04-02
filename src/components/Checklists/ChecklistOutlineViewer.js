import React, {fx} from '../../fx';





class ChecklistOutlineViewer extends React.Component {

    
    renderSteps(steps){
        return(
            <div>
                <fx.UI.BS.ListGroup>
                    {
                        fx._.flatMap(steps, this.renderStep.bind(this))
                    }
                    
                </fx.UI.BS.ListGroup>

            </div>
        )
    }

    renderStep(d, i){

        return(
            <fx.UI.BS.ListGroupItem key={d.key} action>
                <fx.UI.BS.Media>
                    <fx.UI.BS.Media heading>{d.title}</fx.UI.BS.Media>
                    <fx.UI.BS.Media body>
                        {d.description}
                    </fx.UI.BS.Media>
                </fx.UI.BS.Media>
                
                {fx._.has(d, "steps") ? this.renderSteps(d.steps) : null}

            </fx.UI.BS.ListGroupItem>
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


