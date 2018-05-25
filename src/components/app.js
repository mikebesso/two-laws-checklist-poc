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

      const RouteMap = fx._.mapValues(fx.UI.Pages, (element) => element.pageComponent);

      return (
        <fx.UI.IdleTimer idleAction={fx.Firebase.SignOut}>
          <fx.UI.Container>

              <Nav.Top id="topNav" />


              <fx.UI.Columns>

                <fx.UI.Column isSize={12}>
                  <fx.HashRouter.Switch map={RouteMap}  />
                </fx.UI.Column>

              </fx.UI.Columns>
                
              <Nav.Bottom />

          </fx.UI.Container>
        </fx.UI.IdleTimer>
      );

  }
}



const mapStateToProps = (state) => (
    {
        firebase: state.firebase,
        checklists: state.checklists,
        user: state.user,
        isLoaded: state.isLoaded,
        location: state.location,
        hashRouter: state.hashRouter
    } 
);



export default fx.AppStore.Connect(mapStateToProps)(App);