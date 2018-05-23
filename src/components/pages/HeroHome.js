import React from "react";
import fx from "../../fx";

import PageHomeTech from "./PageHomeTech"
import PageHome from "./PageHome"


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
                    <fx.UI.Tabs isBoxed isFullWidth>
                        <fx.UI.Container>
                            <fx.UI.TabList>
                                <fx.UI.Tab isActive={currentPageName===PageHome.Name}>
                                    <fx.UI.TabLink href={PageHome.Href()}>Overview</fx.UI.TabLink>
                                </fx.UI.Tab>
                                {this.renderTodayTab()}
                                <fx.UI.Tab><fx.UI.TabLink>Element</fx.UI.TabLink></fx.UI.Tab>
                                <fx.UI.Tab><fx.UI.TabLink>Components</fx.UI.TabLink></fx.UI.Tab>
                                <fx.UI.Tab isActive={currentPageName===PageHomeTech.Name}><fx.UI.TabLink href={PageHomeTech.Href()}>Technologies</fx.UI.TabLink></fx.UI.Tab>
                            </fx.UI.TabList>
                        </fx.UI.Container>
                    </fx.UI.Tabs>
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