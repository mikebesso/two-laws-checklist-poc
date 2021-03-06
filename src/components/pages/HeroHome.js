import React from "react";
import fx from "../../fx";

import PageHomeTech from "./PageHomeTech"
import PageHome from "./PageHome"

import PageChecklists from "./PageChecklists"


class HeroHome extends React.Component
{


    renderTodayTab = () => {
        if (this.props.firebase.authenticated) {
            return(<fx.UI.Tab><fx.UI.TabLink>Today</fx.UI.TabLink></fx.UI.Tab>)
        }
    }

    render = () => {

        const currentPageName = this.props.pageClass.Name;

        return(
            <fx.UI.Hero isColor='info' isSize='small'>
                <fx.UI.HeroHeader >
                    <fx.UI.Title>Checklist App</fx.UI.Title>
                </fx.UI.HeroHeader>

                <fx.UI.HeroBody>
                    <fx.UI.Subtitle>Welcome</fx.UI.Subtitle>
                    <fx.UI.Content>
                        <p>
                            Get started now!
                        </p>
                    </fx.UI.Content>
                </fx.UI.HeroBody>

                <fx.UI.HeroFooter>
                <fx.UI.Container>
                    <fx.UI.TabSet isPaged isBoxed isFullWidth currentLocation={currentPageName}>
                        <fx.UI.TabPageLink tabTitle="home" location="home" />
                        <fx.UI.TabPageLink tabTitle="Checklists" location={fx.UI.Pages.checklists.pageClass.Location()}/>
                        <fx.UI.TabPageLink tabTitle="tech" location={PageHomeTech.Location()}/>
                    </fx.UI.TabSet>

                </fx.UI.Container>
                </fx.UI.HeroFooter>
            </fx.UI.Hero>
        )

    }
}

const mapStateToProps = (state) => (
    {
        firebase: state.firebase
    } 
  );
  
export default fx.AppStore.Connect(mapStateToProps)(HeroHome);