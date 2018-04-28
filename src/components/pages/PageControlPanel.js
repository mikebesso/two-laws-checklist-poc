import React from "react";
import fx from "../../fx";



//import FontAwesome, {icons} from '../FontAwesome'


class PageControlPanel extends React.Component {

  render() {
    return (
        <main className = "page-control-panel holygrail-main col-12 container">

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



export default fx.AppStore.Connect(mapStateToProps)(PageControlPanel);




