import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import FontAwesome from '../FontAwesome';

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


            <h1>Learning fontawesome </h1>
            <div>
                <FontAwesome icon={FontAwesome.icons.regular.beverages.beer} size={FontAwesome.size} />
                <FontAwesome icon={FontAwesome.icons.regular.beverages.martini} size={FontAwesome.size} />
                <FontAwesome icon={FontAwesome.icons.regular.beverages.coffee} size={FontAwesome.size} />
            </div>


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