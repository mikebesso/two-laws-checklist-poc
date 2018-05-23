import React from 'react';
import fx from "../fx";

// The app must initialize the pages
import "../components/pages";


import Nav from "./Navigation";



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: null
    }
    
  }

  componentWillMount(){
    //this.props.reinitializeChecklists();
  }


    render() {
      return (
        <fx.UI.Container>

            <Nav.Top id="topNav" />


            <fx.UI.Columns>

              <fx.UI.Column isSize={12}>
                <fx.HashRouter.Switch map={fx.UI.Pages.RouteMap()}  />
              </fx.UI.Column>



            </fx.UI.Columns>
              
            </fx.UI.Container>
      );

  }
}



const mapStateToProps = (state) => (
    {
        checklists: state.checklists,
        user: state.user,
        isLoaded: state.isLoaded,
        location: state.location,
        hashRouter: state.hashRouter
    } 
);



export default fx.AppStore.Connect(mapStateToProps)(App);