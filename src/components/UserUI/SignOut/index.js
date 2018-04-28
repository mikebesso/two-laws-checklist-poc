import React from "react";
import fx from "../../../fx";


const SignOutButton = () =>
  <button
    type="button"
    onClick={this.props.signOut}
  >
    Sign Out
  </button>

export default fx.AppStore.Connect(SignOutButton);