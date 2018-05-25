import React from "react";
import fx from "../../fx";



class NavBottom extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onClickNav = () => {}

  render() {
    return (
        <fx.UI.Footer>


          <fx.UI.Navbar 
              style={{ border: 'solid 1px #00D1B2', margin: '0' }}
            >
              <fx.UI.NavbarBrand>
                  <fx.UI.NavbarItem>
                    <fx.UI.IconBrand icon="facebook" size={2} />
                  </fx.UI.NavbarItem>
              </fx.UI.NavbarBrand>
              <fx.UI.NavbarMenu isActive={true} onClick={this.onClickNav}>
                  <fx.UI.NavbarEnd>
                      <fx.UI.NavbarItem href="https://github.com/mikebesso" isHidden='touch'>
                        <fx.UI.IconBrand icon="github" size={2} />
                      </fx.UI.NavbarItem>
                      <fx.UI.NavbarItem>
                        <fx.UI.LinkedinShareButton />
                      </fx.UI.NavbarItem>
                      <fx.UI.NavbarItem>
                          <fx.UI.TwitterShareButton />
                      </fx.UI.NavbarItem>
                  </fx.UI.NavbarEnd>
              </fx.UI.NavbarMenu>
            </fx.UI.Navbar>

        </fx.UI.Footer>
    );
  }
}




const mapStateToProps = (state) => (
  {
      authUser: state.user,
      firebase: state.firebase
  } 
);


export default fx.AppStore.Connect(mapStateToProps)(NavBottom);


