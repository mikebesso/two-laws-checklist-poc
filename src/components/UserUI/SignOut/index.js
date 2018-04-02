import React, {fx} from '../../../fx';



const SignOutButton = () =>
  <button
    type="button"
    onClick={this.props.signOut}
  >
    Sign Out
  </button>

export default fx.connectFx(SignOutButton);