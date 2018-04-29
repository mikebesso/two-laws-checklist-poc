import React from 'react';
import fx from "../fx";

import Pages from "./pages";
import Nav from "./Navigation";

import * as Bloomer from "bloomer"


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

  renderPageRoutes = () => {

    const map = Pages;


    return(
      
      <fx.HashRouter.Switch map={map}  />

    )
    
  }

  renderNavLeft = () => {
    return(
      <div className="col-md-2 fixed">
        <Nav.Left />
      </div>
    )
  }

  renderNavBottom = () => {
    return(
      <footer >
        <Nav.Bottom />
      </footer>
    )
  }

  renderNavTop = () =>  {
    //return (<div></div>)
    return(
      <Nav.Top id="topNav" />
    )
  }

  render() {
    return (
      <Bloomer.Container>

          {this.renderNavTop()}

          <Bloomer.Hero isColor='info' isSize='small'>

            <Bloomer.HeroHeader>
              <Bloomer.Container hasTextAlign="centered">
                <Bloomer.Title>Welcome</Bloomer.Title>
              </Bloomer.Container>
            </Bloomer.HeroHeader>

            <Bloomer.HeroBody>

              <Bloomer.Columns>

                <Bloomer.Column isSize={2}>
                  {this.renderNavLeft()}
                </Bloomer.Column>


              <Bloomer.Column isSize={8}>
                {this.renderPageRoutes()}
              </Bloomer.Column>


              <Bloomer.Column isSize={2}>
                          
                  <section className="text-center bg-secondary">
                      <h2>Aside</h2>
                      <p className="lead">the right side will show context sensitive tips and help</p>
                  </section>
              </Bloomer.Column>

              </Bloomer.Columns>
            </Bloomer.HeroBody>

            <Bloomer.HeroFooter>
           
              <div>nav bottom</div>
            </Bloomer.HeroFooter>
            </Bloomer.Hero >
          </Bloomer.Container>
    );

  }
}



const mapStateToProps = (state) => (
    {
        checklists: state.checklists,
        user: state.user,
        isLoaded: state.isLoaded,
        location: state.location
    } 
);



export default fx.AppStore.Connect(mapStateToProps)(App);