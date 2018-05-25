import React from "react";
import fx from "../../fx";

import HeroHome from "./HeroHome"
import HeroPreview from "./HeroPreview"

//import { fx.UI.Container, Box , Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd, Field, NavbarDivider, NavbarDropdown, NavbarLink, Button, Control } from 'bloomer';

//import { Link } from 'react-router-dom';


class Page extends React.Component {


    static PageKey = "home";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/`;
    static RequiresAuthentication = true;

    static Title = "Home";  


    
    state = {count: 0}

    renderHero = (authenticated) => {
        return(
            authenticated 
            ? <HeroHome pageClass={Page} /> 
            : <HeroPreview pageClass={Page} />
        )
    }

    componentWillMount = () => {
        const popup = window.open("", "popup");
        if (popup) {popup.close()}

        const chat = window.open("", "chat");
        if (chat) {chat.close()}
    }

    renderPreviewWelcome = () => {

        return(
            <fx.UI.Message>
                <fx.UI.MessageHeader>
                    Try us out
                </fx.UI.MessageHeader>

                <fx.UI.MessageBody> 
                <a href={fx.HashRouter.BuildHREF("checklists")}>Start Here</a>
                </fx.UI.MessageBody>
            </fx.UI.Message>

        )
        
    }

    clicked = () => {
        this.setState({count: this.state.count + 1})
    }

    renderUserWelcome = () => {

        return(
            <fx.UI.Section>
                <fx.UI.Message>
                    <fx.UI.MessageHeader>
                        Welcome Back
                    </fx.UI.MessageHeader>

                    <fx.UI.MessageBody> 
                        do stuff
                    </fx.UI.MessageBody>
                </fx.UI.Message>

                <fx.UI.Button onClick={this.clicked}> click me </fx.UI.Button>

                <fx.UI.NewWindow name="popup" title="New Window">
                    
                    <fx.UI.Message>
                        <fx.UI.MessageHeader>
                            a pop up
                        </fx.UI.MessageHeader>

                        <fx.UI.Button onClick={this.clicked}> click me </fx.UI.Button>

                        <div>{this.state.count} </div>
                        <div>{this.props.firebase.name}</div>
                        <div>{this.state.count} </div>

                        <fx.UI.MessageBody> 
                            do stuff
                        </fx.UI.MessageBody>
                    </fx.UI.Message>

                </fx.UI.NewWindow>

                <fx.UI.ChatWindow name="chat"/>

            </fx.UI.Section>
        )
    }
    
    renderWelcome = (authenticated) => {
        
        return(
            authenticated ? this.renderUserWelcome() : this.renderPreviewWelcome()
        )

    }

  render() {

        console.log("CURRENT USER", fx.Firebase.CurrentUser, this.props.firebase);

        return (

            <main className = "page-home">

                {this.renderHero(this.props.firebase.authenticated)}
                
                <fx.UI.Container isFluid>

                    {this.renderWelcome(this.props.firebase.authenticated)}
                </fx.UI.Container>

            </main>

        )

    
    }
}


const mapStateToProps = (state) => (
    {
        firebase: state.firebase
    } 
  );

const ConnectedPage = fx.AppStore.Connect(mapStateToProps)(Page);
fx.UI.AddPage(Page, ConnectedPage);
export default ConnectedPage;

/*
        <section>
            <h1>
                Welcome to my Checklist App Proof of Concept
            </h1>
             <Link to = "/checklists">Start Here</Link>
        </section>

*/