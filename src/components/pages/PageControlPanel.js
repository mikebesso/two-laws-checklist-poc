import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BS from "reactstrap";
import UI from "../UI";

//import FontAwesome, {icons} from '../FontAwesome'


class PageControlPanel extends Component {

    
    
    tabs = [
        {
            title: "abc",
            component: BS.Button
        },
        {
            title: "def",
            component: BS.Button
        }
    ]

  render() {
    return (
        <main className = "holygrail-main col-lg-7 col-xxl-9">


        </main>

    )

    
  }
}



export default PageControlPanel;

