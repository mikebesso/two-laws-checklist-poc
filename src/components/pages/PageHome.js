import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import FontAwesome, {icons, iconSize} from '../FontAwesome'


class PageHome extends Component {

  render() {

    console.log("size", iconSize, iconSize.x1)
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
                <FontAwesome icon={icons.regular.beverages.beer} size={iconSize.x1} />
                <FontAwesome icon={icons.regular.beverages.martini} size={iconSize.x2} />
                <FontAwesome icon={icons.regular.beverages.coffee} size={iconSize.x3} />
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