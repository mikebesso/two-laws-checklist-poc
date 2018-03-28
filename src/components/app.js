import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { history } from "../middlewares/router-middleware";
import ConnectedRouter from "./ConnectedRouter";




import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


//import Checklists from '../components/Checklists';

import Page from "./pages";
import Nav from "./Navigation";
//import actions from "../actions";




class App extends Component {

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
      <ConnectedRouter history={history}>

  
          <div className="container-fluid h-100">

            <div className="row h-100">

              <div className="col-md-2 fixed">
                <Nav.Left />
              </div>


              <div className="col fluid d-flex flex-column">
                <Nav.Top id="topNav" />

                <div className="row flex-grow">
                  <Switch>

                    <Route path="/user/:component" component={Page.User}/>
                    
                    
                    <Route path="/checklist/:key" component={Page.Checklist} />
                    <Route path="/checklists" component={Page.Checklists} />
                    <Route path="/control-panel" component={Page.ControlPanel} />
                    <Route path="/" component={Page.Home} />
                  </Switch>
                </div>
                <footer >
                    <Nav.Bottom />
                </footer>

              </div>

              <aside className="holygrail-aside col-lg-3 col-xxl-2 bg-inverse">
                          
                  <section className="text-center bg-secondary">
                      <h2>Aside</h2>
                      <p className="lead">Hello {this.props.isLoaded.user ? this.props.user.uid : "There"}</p>
                  </section>
              </aside>

            
            </div>
          </div>

      </ConnectedRouter>  
    );
    
  }
}



const mapStateToProps = (state) => (
    {
        checklists: state.checklists,
        user: state.user,
        isLoaded: state.isLoaded
    } 
);



export default connect(mapStateToProps)(App);