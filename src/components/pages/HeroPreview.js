import React from "react";
import fx from "../../fx";

import PageHomeTech from "./PageHomeTech"
import PageHome from "./PageHome"


class HeroPreview extends React.Component
{


    renderTodayTab = () => {
        if (this.props.firebase.authenticated) {
            return(<fx.UI.Tab><fx.UI.TabLink>Today</fx.UI.TabLink></fx.UI.Tab>)
        }
    }

    render = () => {

        const currentPageKey = this.props.pageClass.PageKey;

console.log(currentPageKey, PageHome.PageKey, PageHomeTech.PageKey)
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
                        <fx.UI.TabSet isPaged isBoxed isFullWidth currentLocation={currentPageKey}>
                            <fx.UI.TabPageLink tabTitle="Abc" location="home" />
                            <fx.UI.TabPageLink tabTitle="technology" location="homeTech"/>
                            <fx.UI.TabPageLink tabTitle="ghi" location="home"/>
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
  
export default fx.AppStore.Connect(mapStateToProps)(HeroPreview);