import React from "react";
import fx from "../../fx";

import { isUndefined } from "util";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { Media, ListGroup, ListGroupItem } from 'reactstrap';

class Checklist extends React.Component {

    constructor(props){
        super(props);

    }

    componentDidMount() {
       // this.props.fetchChecklists();
    }

    render() {

        const { error, loading, Data, meta } = this.props;
 

        
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        
        if (isUndefined(Data)){
            return <div>Undefined...</div>;
        }

        console.log("rendering", Data);
        console.log(Data.map(d => d.title))

        return (
        <ListGroup>
            {
                Data.map(
                    function(d, i){
                        console.log(i, d, d.id);
                         return(
                        <ListGroupItem key={d.key} action>
                        
                            <Media>
                                <Media left href="#" >
                                    <Media object src="/img/arrow-alt-circle-right.svg" alt="image" width="60px"/>
                                </Media>
                                <Media body>
                                    <Media heading>{d.title}</Media>
                                    description goes here
                                </Media>
                            </Media>
                        
                        </ListGroupItem>
                    )}
                )
                /*
                    (d, i) => {
                        console.log(i, d.id, d);
                        return(
                            <li key={i}>{d.id} - {d.title}</li>
                        )
                    }
                )*/
            }
            
        </ListGroup>
        );
        
    }
}

const mapStateToProps = state => (
    {
        meta: state.checklists.meta,
        Data: state.checklists.data,
        loading: state.checklists.loading,
        error: state.checklists.error
    }
);


export default fx.AppStore.Connect(mapStateToProps)(Checklist);
