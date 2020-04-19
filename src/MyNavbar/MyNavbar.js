import React from 'react';
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#masthead">Jazz Godard</a>
          <NavbarToggler className="navbar-toggler navbar-toggler-right" onClick={this.toggle} />
            <Collapse className="" isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#services">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#footer">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </div>
      </nav>
    </div>
    );
  }
}

export default MyNavbar;
