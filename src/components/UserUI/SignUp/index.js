import React from 'react';
import {
  Link
} from 'react-router-dom';

//import { auth, db } from '../../../firebase';

import SignInWithEmail from "../SignIn/SignInWithEmail";


const SignUpPage = () =>
  <div>
    <h1>SignUp</h1>
    <SignInWithEmail signup />
  </div>



const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to="/user/signup">Sign Up</Link>
  </p>

export default SignUpPage;

export {
  SignUpLink,
};