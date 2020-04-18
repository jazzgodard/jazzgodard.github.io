import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Jazz Godard</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    // <div className="Navbar">
    //   {/* <!-- Navigation --> */}
    //   <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    //     <div className="container">
    //       <a className="navbar-brand js-scroll-trigger" href="#page-top">Jazz Godard</a>
    //       <button
    //         className="navbar-toggler navbar-toggler-right"
    //         type="button" data-toggle="collapse"
    //         data-target="#navbarResponsive"
    //         aria-controls="navbarResponsive"
    //         aria-expanded="false" aria-label="Toggle navigation">
    //         Menu
    //         <i className="fas fa-bars ml-1"></i>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarResponsive">
    //         <ul className="navbar-nav text-uppercase ml-auto">
    //           <li className="nav-item">
    //             <a className="nav-link js-scroll-trigger" href="#services">Services</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link js-scroll-trigger" href="#about">About</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link js-scroll-trigger" href="#team">Team</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    );
  }
}

export default MyNavbar;
