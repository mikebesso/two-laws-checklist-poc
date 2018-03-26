import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PageHome extends Component {

  render() {
    return (
        <main className = "holygrail-main col-lg-7 col-xxl-9">
             <h1>
                Welcome to my Checklist App Proof of Concept
            </h1>
            <Link to = "/checklists">Start Here</Link>
            <ul>
                <li>
                    Check out FireBase from google
                </li>
            </ul>
        </main>

    )

    
  }
}



export default PageHome;


/*
        <section>
            <h1>
                Welcome to my Checklist App Proof of Concept
            </h1>
             <Link to = "/checklists">Start Here</Link>
        </section>

*/