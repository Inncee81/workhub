import React, { Component } from 'react';
import Modals from '../../components/modal/modal';
import './navbar.css';
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

class NavBar extends Component{
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
            <Link to="/about" >About</Link>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Register</NavLink>
              </NavItem>
              <NavItem>
                <Modals text='Login'/>
              </NavItem>
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

export default NavBar;