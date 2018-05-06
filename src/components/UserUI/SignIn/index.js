import React from "react";
import fx from "../../../fx";


//import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';

//import { auth } from '../../../firebase';
//import actions from '../../../actions';

import SignOutButton from '../SignOut';
import SignInWithEmail from "./SignInWithEmail";

class SignInPage extends React.Component {

    render(){
      return(

          (!this.props.firebase.user )
            ?
              (
                <fx.UI.BS.Container className="mt-4" fluid>

                  <fx.UI.BS.Row>
                    <fx.UI.BS.Col className="text-center col-sm-4">
                      <fx.UI.BS.Button
                        onClick={() => this.props.firebaseSignInWithGoogle()}
                      >
                        Sign In With Google
                      </fx.UI.BS.Button>
                  </fx.UI.BS.Col>
                  <fx.UI.BS.Col className="text-center col-sm-4">
                      Or
                    </fx.UI.BS.Col>
                    <fx.UI.BS.Col  className="text-center col-sm-4">
                        <h1>SignIn</h1>
                        <SignInWithEmail />
                        <PasswordForgetLink />
                        <SignUpLink />
                    </fx.UI.BS.Col>
                  </fx.UI.BS.Row>
              </fx.UI.BS.Container>
            )
          :
            (
              <fx.UI.BS.Container className="mt-4" fluid>
                <fx.UI.BS.Row>
                <fx.UI.BS.Col className="text-center col-sm-12">
                  Please come back soon.
                </fx.UI.BS.Col>
                  <fx.UI.BS.Col className="text-center col-sm-12">
                    <SignOutButton />
                  </fx.UI.BS.Col>
                </fx.UI.BS.Row>
              </fx.UI.BS.Container>
                
            )
      )
    }
}





const mapStateToProps = (state) => (
  {
      firebase: state.firebase
  } 
);



export default fx.AppStore.Connect(mapStateToProps)(SignInPage);



