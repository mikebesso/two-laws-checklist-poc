import React, {Component} from 'react';

import classnames from "classnames";
import * as BS from 'reactstrap';
import {isArray} from "util";

/*

    tabs = 
        [
            {
                title: 
                component:
            }
        ]
    

*/



class Tabs extends Component {

  
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '0'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

      renderTab(d, i = 0){
          return(
            <BS.NavItem key={`${i}`}>
                <BS.NavLink 
                    className={classnames({ active: this.state.activeTab === `${i}` })}
                    onClick={() => { this.toggle(`${i}`); }}
                >
                    {d.props.tabTitle}
                </BS.NavLink>
            </BS.NavItem>             
          )
      }

      renderTabPane(d, i = 0){
          return(
            <BS.TabPane key={`${i}`} tabId={`${i}`}>
                {d}
            </BS.TabPane>              
          )
      }

    render(){

        return(
            <div>
                <BS.Nav tabs>
                    {
                        isArray(this.props.children)
                            ? this.props.children.map( 
                                (d, i) => this.renderTab(d, i)
                            )
                            : this.renderTab(this.props.children)
                    }
                </BS.Nav>
                <BS.TabContent activeTab={this.state.activeTab}> 
                    { 
                        isArray(this.props.children)
                            ? this.props.children.map(
                                (d, i) => this.renderTabPane(d, i)
                            )
                            : this.renderTabPane(this.props.children)
                    }             
                </BS.TabContent>
            </div>
        )
    }
}


export default Tabs;