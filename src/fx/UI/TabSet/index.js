import React from 'react';

import classnames from "classnames";
import {isArray} from "util";

import * as Bloomer from "bloomer";

/*

    tabs = 
        [
            {
                title: 
                component:
            }
        ]
    

*/



class TabSet extends React.Component {

  
    constructor(props) {
        super(props);
    
        //this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '0'
        };
      }
    
      toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

      renderTab = (d, i = 0) => {
          return(
            <Bloomer.Tab key={`${i}`} className={classnames("tab", { isActive: this.state.activeTab === `${i}` })}>
                <Bloomer.TabLink 
                    className={classnames("tab-link")}
                    onClick={() => { this.toggle(`${i}`); }}
                >
                    {d.props.tabTitle}
                </Bloomer.TabLink>
            </Bloomer.Tab>             
          )
      }

      renderTabPane = (d, i = 0) => {
          return(
            <Bloomer.Container key={`${i}`} >
                {d}
            </Bloomer.Container>              
          )
      }

    render(){

        return(
            <div>
                <Bloomer.Tabs className={classnames("TabSet")}>
                    <Bloomer.TabList>
                        {
                            isArray(this.props.children)
                                ? this.props.children.map( 
                                    (d, i) => this.renderTab(d, i)
                                )
                                : this.renderTab(this.props.children)
                        }
                    </Bloomer.TabList>
                </Bloomer.Tabs>
                <Bloomer.Container> 
                    { 
                        
                        isArray(this.props.children)
                            ? this.renderTabPane(this.props.children[this.state.activeTab])
                            : this.renderTabPane(this.props.children)
                    }             
                </Bloomer.Container>
            </div>
        )
    }
}


export default TabSet;