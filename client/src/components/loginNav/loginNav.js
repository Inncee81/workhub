import React, { Component } from 'react';
import './loginNav.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import {Link} from 'react-router-dom'

class loginNav extends Component{
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
    render(){
        return(
            <div>
            <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><strong>Workhub.com</strong></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto nav-edit" navbar>
            <NavItem >
            <Link to="/" >Home</Link>&nbsp;&nbsp;
              </NavItem>
              <NavItem >
            <Link to="/About" >About</Link>
              </NavItem>&nbsp;&nbsp;
              <NavItem>
              <Link to="/" >Logout</Link>
              </NavItem>&nbsp;&nbsp;
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
            </div>
        )
    }
}

export default loginNav;