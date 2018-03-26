import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";



import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

//import Checklists from '../components/Checklists';

import Page from "./pages";
import Nav from "./Navigation";
import actions from "../actions";



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
      <BrowserRouter>

        <div className="container-fluid h-100">

          <div className="row h-100">

            <div className="col-md-2 fixed">
              <Nav.Left />
            </div>


            <div className="col fluid d-flex flex-column">
              <Nav.Top id="topNav" />

              <div className="row flex-grow">
                <Switch>
                  <Route path="/checklist/:key" component={Page.Checklist} />
                  <Route path="/checklists" component={Page.Checklists} />
                  <Route path="/control-panel" component={Page.ControlPanel} />
                  <Route path="/" component={Page.Home} />
                </Switch>
              </div>
              <footer className="navbar navbar-toggleable-xl navbar-faded navbar-light bg-primary">
                  Footer
              </footer>

            </div>

            <aside className="holygrail-aside col-lg-3 col-xxl-2 bg-inverse">
                        
                <section className="text-center bg-secondary">
                    <h2>Aside</h2>
                    <p className="lead">Here is where you put useful information or ads</p>
                </section>
            </aside>

          
          </div>
        </div>
      </BrowserRouter>  
    );
    
  }
}



const mapStateToProps = (state) => (
    {
        checklists: state.checklists
    } 
);

const mapDispatchToProps = dispatch => {
    return(
        bindActionCreators(
            {
                ...actions
            },
            dispatch
        )
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);