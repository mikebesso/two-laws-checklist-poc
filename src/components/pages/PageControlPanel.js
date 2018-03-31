/*
import React from 'react';
import * as Redux from 'redux';
import { Link } from 'react-router-dom';
*/

import React, {fx} from "../../fx";


//import * as BS from "reactstrap";
//import UI from "../UI";


import actions from "../../actions";

import data from "../../data";


//import FontAwesome, {icons} from '../FontAwesome'


class PageControlPanel extends fx.react.Component {

  render() {
    return (
        <main className = "holygrail-main col-lg-7 col-xxl-9">

            <fx.UI.BS.Button onClick={() => {this.props.reinitializeChecklists()}}>Reinitialize</fx.UI.BS.Button>

            <fx.UI.BS.NavLink href="https://console.firebase.com" target="firebase">Firebase</fx.UI.BS.NavLink>

        </main>

    )
    
  }
}



const mapStateToProps = (state) => (
    {
    } 
);

const mapDispatchToProps = dispatch => {
    return(
        fx.redux.bindActionCreators(
            {
                ...actions
            },
            dispatch
        )
    );
}

export default fx.redux.connect(mapStateToProps, mapDispatchToProps)(fx.redux.withRouter(PageControlPanel));




