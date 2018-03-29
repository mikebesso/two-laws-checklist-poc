import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../../firebase';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as BS from "reactstrap";

import actions from '../../../actions';
import SignOutButton from '../SignOut';

class SignInPage extends Component {

    render(){
      return(


          (!this.props.firebase.user )
            ?
              (
                <BS.Container className="mt-4" fluid>

                  <BS.Row>
                    <BS.Col className="text-center col-sm-4">
                      <BS.Button
                        onClick={() => this.props.signInWithGoogle()}
                      >
                        Sign In With Google
                      </BS.Button>
                  </BS.Col>
                  <BS.Col className="text-center col-sm-4">
                      Or
                    </BS.Col>
                    <BS.Col  className="text-center col-sm-4">
                        <h1>SignIn</h1>
                        <SignInForm />
                        <PasswordForgetLink />
                        <SignUpLink />
                    </BS.Col>
                  </BS.Row>
              </BS.Container>
            )
          :
            (
              <BS.Container className="mt-4" fluid>
                <BS.Row>
                <BS.Col className="text-center col-sm-12">
                  Please come back soon.
                </BS.Col>
                  <BS.Col className="text-center col-sm-12">
                    <SignOutButton />
                  </BS.Col>
                </BS.Row>
              </BS.Container>
                
            )
      )
    }
}

/*
const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

*/

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};



class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push("/");
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {

    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
      
   
  }
}





const mapStateToProps = (state) => (
  {
      firebase: state.firebase
  } 
);

const mapDispatchToProps = (dispatch) => {
  return(
      bindActionCreators(
          {
              ...actions
          },
          dispatch
      )
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInPage));





export {
  SignInForm,
};