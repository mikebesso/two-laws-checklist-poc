import React from "react";
import fx from "../../fx";

import * as Bloomer from "bloomer";

import SignInWithEmail from "../UserUI/SignIn/SignInWithEmail";


class PageSignIn extends React.Component {

    static Location = () => {
        return("signIn", {})
    }
    static Href = () => {
        const href = fx.HashRouter.BuildHREF("signIn");
        return(href);
    }


    render = () => {
    
        return(
        (!this.props.firebase.user )
        ?
          (
            <Bloomer.Container isFluid>

                <Bloomer.Columns>

                <Bloomer.Column>
                  <Bloomer.Button
                    onClick={() => this.props.signInWithGoogle()}
                  >
                    Sign In With Google
                  </Bloomer.Button>
              </Bloomer.Column>
              <Bloomer.Column hasTextAlign="centered">
                  <Bloomer.Title>
                  Or
                  </Bloomer.Title>
                </Bloomer.Column>
                <Bloomer.Column  >
                    <h1>SignIn</h1>
                    <SignInWithEmail />
                </Bloomer.Column>
              </Bloomer.Columns>
          </Bloomer.Container>
        )
      :
        (
            <Bloomer.Container isFluid>
            <Bloomer.Columns>
            <Bloomer.Column >
              Please come back soon.
            </Bloomer.Column>
              <Bloomer.Column >
                <div> Sign out button</div>
              </Bloomer.Column>
            </Bloomer.Columns>
          </Bloomer.Container>
            
        )
    )        
        
    
    }
}



const mapStateToProps = (state) => (
    {
        firebase: state.firebase
    } 
  );
  
  
  
export default fx.AppStore.Connect(mapStateToProps)(PageSignIn);
  
  
