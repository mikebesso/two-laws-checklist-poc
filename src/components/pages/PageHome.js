import React from "react";
import fx from "../../fx";

import HeroHome from "./HeroHome"

//import { fx.UI.Container, Box , Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd, Field, NavbarDivider, NavbarDropdown, NavbarLink, Button, Control } from 'bloomer';

//import { Link } from 'react-router-dom';


class Page extends React.Component {


    static PageKey = "home";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = true;

    static Title = "Home";  



  render() {

        console.log("CURRENT USER", fx.Firebase.CurrentUser);

        return (

            <main className = "page-home">

                <HeroHome pageClass={Page}/>

                <a href={fx.HashRouter.BuildHREF("checklists")}>Start Here</a>

                <ul>
                    <li>
                        Check out FireBase from google
                    </li>
                </ul>


            </main>

        )

    
    }
}




const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.Pages.add(Page, ConnectedPage);
export default ConnectedPage;

/*
        <section>
            <h1>
                Welcome to my Checklist App Proof of Concept
            </h1>
             <Link to = "/checklists">Start Here</Link>
        </section>

*/