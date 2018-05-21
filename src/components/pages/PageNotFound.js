import React from "react";
import fx from "../../fx";
import * as Bloomer from "bloomer"


import FontAwesome from '../FontAwesome';

class PageNotFound extends React.Component {


    render = () => {
        
        return(
            <div>Not Found</div>
        )
    }

}






export default fx.AppStore.Connect()(PageNotFound);