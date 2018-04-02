import React from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import actions from '../../../actions';

import {
  ButtonDropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';





class UserButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle() {
      console.log("toggle", this.state.isOpen)
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {

    if (this.props.firebase.user) {
        return(
            <ButtonDropdown isOpen={this.state.isOpen} toggle={()=> this.toggle()}>
                <DropdownToggle caret> 
                    {this.props.user.name}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={
                        () => {
                            console.log("signout clicked");
                            this.props.signOut()
                        }
                    }>
                        Sign Out
                    </DropdownItem>
                </DropdownMenu>

            </ButtonDropdown>
        )

    } else {

        return(
            <Button 
                onClick={() => this.props.push("/user/signin")}
            >
                Sign In
            </Button>


        )

    }


 
  }
}




const mapStateToProps = (state) => (
  {
      user: state.user,
      firebase: state.firebase
  } 
);

const mapDispatchToProps = (dispatch) => {
    return(
        bindActionCreators(
            {
                ...actions
            },
            dispatch
        )
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserButton));


