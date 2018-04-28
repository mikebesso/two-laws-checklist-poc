import React from "react";

import fx from "../../fx";

class NavLeft extends React.Component {


    render() {


      return (
        <div>
            the left side will provide context sensitive actions

      </div>
      );
    }
  }



const mapStateToProps = (state) => (
    {
        authUser: state.user,
        firebase: state.firebase
    } 
);


export default fx.AppStore.Connect(mapStateToProps)(NavLeft);




