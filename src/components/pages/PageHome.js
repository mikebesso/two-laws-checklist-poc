import React from "react";
import fx from "../../fx";

//import { Container, Box , Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd, Field, NavbarDivider, NavbarDropdown, NavbarLink, Button, Control } from 'bloomer';

//import { Link } from 'react-router-dom';



import FontAwesome from '../FontAwesome';

class PageHome extends React.Component {

  render() {

    const input = '# This is a header\n\nAnd this is a paragraph';

    return (

    

        <main className = "page-home holygrail-main col-lg-7 col-xxl-9">
            <h1>
                Welcome to my Checklist App Proof of Concept
            </h1>

            <a href={fx.HashRouter.BuildHREF("checklists")}>Start Here</a>
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

            <fx.UI.Markdown source={input} />

        </main>

    )

    
  }
}



export default fx.AppStore.Connect()(PageHome);


/*
        <section>
            <h1>
                Welcome to my Checklist App Proof of Concept
            </h1>
             <Link to = "/checklists">Start Here</Link>
        </section>

*/