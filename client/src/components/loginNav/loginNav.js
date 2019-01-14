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
    import Axios from 'axios'
class loginNav extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userID:JSON.parse(sessionStorage.getItem('user')).userToken,
      users:[]
    };
    
  }
 

  componentDidMount(){
    this.getUser();
  }
 getUser = ()=>{
  let  {userID} =  this.state 
  Axios.get(`http://localhost:5000/users/${userID}`)
  .then(res =>{
   console.log(res.data.message.profilePicture)
   this.setState({
    users:res.data.message
   })
  })
 }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  
  Logout () {
    sessionStorage.removeItem('user')
  }
    render(){
      let {users} = this.state;
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
              <NavItem onClick={() => this.Logout()}>
              <Link to="/" >Logout</Link>
              </NavItem>&nbsp;&nbsp;
              <NavItem  key={users}>
                    <img className='profiledi' src={users.profilePicture} alt='' height='30' width='30'/>
                    </NavItem>
              <UncontrolledDropdown nav inNavbar>
              
                <DropdownToggle nav caret>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
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