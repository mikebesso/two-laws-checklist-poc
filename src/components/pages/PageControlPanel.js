/*
import React from 'react';
import * as Redux from 'redux';
import { Link } from 'react-router-dom';
*/

import React, {fx} from "../../fx";

//import FontAwesome, {icons} from '../FontAwesome'


class PageControlPanel extends fx.react.Component {

  render() {
    return (
        <main className = "holygrail-main col-12 container">

            <fx.UI.BS.Button onClick={() => {this.props.reinitializeChecklists()}}>Reinitialize</fx.UI.BS.Button>

            <fx.UI.BS.NavLink href="https://console.firebase.google.com" target="firebase">Firebase</fx.UI.BS.NavLink>

        </main>

    )
    
  }
}



const mapStateToProps = (state) => (
    {
    } 
);



export default fx.connectFx(mapStateToProps)(fx.withRouter(PageControlPanel));




