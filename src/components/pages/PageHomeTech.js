import React from "react";
import fx from "../../fx";

import HeroHome from "./HeroHome"

//import { fx.UI.Container, Box , Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd, Field, NavbarDivider, NavbarDropdown, NavbarLink, Button, Control } from 'bloomer';

//import { Link } from 'react-router-dom';


class Page extends React.Component {

    static PageKey = "homeTech";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = true;

     
    static Title = "Tech";  

    static Location = () => {
        return("/home/tech", {})
    }
    static Href = () => {
        const href = fx.HashRouter.BuildHREF("homeTech");
        return(href);
    }

    render() {

     return (

        <fx.UI.Container className = "page-home-tech">

            <HeroHome pageClass={Page} />

            <fx.UI.Container  isFluid>
                <a href={fx.HashRouter.BuildHREF("checklists")}>Start Here</a>

                <ul>
                    <li>
                        Check out FireBase from google
                    </li>
                </ul>

            </fx.UI.Container>
        </fx.UI.Container>

    )

    
  }
}


const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.AddPage(Page, ConnectedPage);
export default ConnectedPage;
