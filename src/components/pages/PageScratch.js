import React from "react";
import fx from "../../fx";
import * as Bloomer from "bloomer"


import FontAwesome from '../FontAwesome';

class Page extends React.Component {

    static PageKey = "scratch";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = true;
  
    static Title = "Scratch";
  

    render() {

        return(

        <Bloomer.Panel>

            <Bloomer.PanelHeading>Repositories</Bloomer.PanelHeading>
                <Bloomer.PanelBlock>
                    <Bloomer.Control hasIcons='left'>
                        <Bloomer.Input isSize='small' placeholder='Search' />
                        <Bloomer.Icon isSize='small' isAlign='left'>
                            <span className='fas fa-search' aria-hidden='true' />
                        </Bloomer.Icon>
                    </Bloomer.Control>
                </Bloomer.PanelBlock>
                <Bloomer.PanelTabs>
                    <Bloomer.PanelTab tag="a" isActive>All</Bloomer.PanelTab>
                    <Bloomer.PanelTab tag="a" >Public</Bloomer.PanelTab>
                    <Bloomer.PanelTab tag="a" >Private</Bloomer.PanelTab>
                    <Bloomer.PanelTab tag="a" >Sources</Bloomer.PanelTab>
                    <Bloomer.PanelTab tag="a" >Fork</Bloomer.PanelTab>
                </Bloomer.PanelTabs>
                <Bloomer.PanelBlock isActive>
                    <Bloomer.PanelIcon className="far fa-book" />
                    Bloomer
                </Bloomer.PanelBlock>
                <Bloomer.PanelBlock>
                    <Bloomer.PanelIcon className="far fa-code-fork" />
                    RxJS
                </Bloomer.PanelBlock>
                <Bloomer.PanelBlock>
                    <Bloomer.PanelIcon className="far fa-code-fork" />
                    Webpack
                </Bloomer.PanelBlock>
                <Bloomer.PanelBlock>
                    <Bloomer.PanelIcon className="far fa-code-fork" />
                    Typescript
                </Bloomer.PanelBlock>
                <Bloomer.PanelBlock tag='label'>
                    <Bloomer.Checkbox> Remember me</Bloomer.Checkbox>
                </Bloomer.PanelBlock>
                <Bloomer.PanelBlock>
                    <Bloomer.Button isOutlined isFullWidth isColor='primary'> Reset all filters</Bloomer.Button>
                    <Bloomer.Button isOutlined isFullWidth isColor='primary'> Clear all filters</Bloomer.Button>
                </Bloomer.PanelBlock>        

        </Bloomer.Panel>

        )

    }
}



const ConnectedPage = fx.AppStore.Connect()(Page);
fx.UI.Pages.add(Page, ConnectedPage);
export default ConnectedPage;
