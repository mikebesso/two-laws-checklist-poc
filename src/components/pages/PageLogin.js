import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from '../Users/Login';

export default class PageLogin extends Component {



  render() {



    return (
        <main className = "holygrail-main col-lg-7 col-xxl-9">


            <Login />

            <Link to="/">Home</Link>
        </main>

    )

    
  }
}


