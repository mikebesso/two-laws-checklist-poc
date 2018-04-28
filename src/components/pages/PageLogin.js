import React from "react";


import Login from '../Users/Login';

export default class PageLogin extends React.Component {



  render() {



    return (
        <main className = "holygrail-main col-lg-7 col-xxl-9">


            <Login />

            <a to="/">Home</a>
        </main>

    )

    
  }
}


