import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";



import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

//import Checklists from '../components/Checklists';

import pages from "../pages";
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
        <section className="holygrail">
          <header className="bg-inverse text-white text-center py-4"> 
            <div> here I am </div>
            <h3 className = "h3 bg-primary" height="100px">  
              Header Here 
            </h3>
          </header>
          <section className="holygrail-body no-gutters">
            <nav className="holygrail-nav col-lg-2 col-xxl-1 bg-inverse">

              <section className="text-center bg-danger">
                  <h2>Nav</h2>
                  <p className="lead">Here is where you put navigation or filters</p>
              </section>
              
            </nav>


          <Switch>
            <Route path="/checklist/:key" component={pages.PageChecklist} />
            <Route path="/checklists" component={pages.PageChecklists} />
            <Route path="/" component={pages.PageHome} />
          </Switch>

            <aside className="holygrail-aside col-lg-3 col-xxl-2 bg-inverse">
                        
                <section className="text-center bg-danger">
                    <h2>Aside</h2>
                    <p className="lead">Here is where you put useful information or ads</p>
                </section>
            </aside>

            </section>

            <footer className="bg-danger text-inverse text-center py-4">
                <h3>Footer</h3>
            </footer>
        </section>
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