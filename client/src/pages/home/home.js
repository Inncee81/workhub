import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardTitle,
  CardText,
  Card
} from "reactstrap";
import "./home.css";
import { Container, Row, Col } from "reactstrap";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SearchDropDown from "../../components/searchDropDown/searchDropDown";
import Axios from "axios";
import SubscribeModal from "../../components/subscribeModal/subscribeModal";
import {Link} from "react-router-dom"
import { error } from "util";
class Home extends Component {
  constructor(props) {
    super(props);
    // state = {jobs:[]}

    this.toggleDropDown = this.toggleDropDown.bind(this);
    // this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      jobs: [],
      state: [],
      users:[],
      course:'',
      location:'',
      place: '',
      search:[],
      searchError:''

      //   splitButtonOpen: false
    };
  }
  componentDidMount() {
    this.getJob();
    this.getState();
    
  }

  getJob = () => {
    Axios.get("http://localhost:5000/jobs/").then(res => {
        console.log(res)
      this.setState({
        jobs: res.data.message
      });
    });
  }

  getState = () => {
    Axios.get("http://localhost:5000/state/").then(res => {
        console.log("from backend", res.data.message);
        this.setState({
          state: res.data.message
        });
      });
  }
  handleChange = (event)=>{
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (e)=>{
    e.preventDefault()
    let {course} = this.state
    let Search = {course,location: this.state.place};
    console.log("search", Search);

    Axios.post("http://localhost:5000/jobs/search",Search)
  .then(res=> {
   console.log(res);
    this.setState({
      search:res.data
    })
   // console.log('i don reach',this.state.search)
  })
  }

  

transfer = (val) => {
  this.setState({
    place: val
  })
}


  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

    toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
      });
    }

  render() {
    let { jobs } = this.state;
    //console.log(this.state.jobs)
    const { state } = this.state;

    //console.log(state);
    return (
      <Container fluid={true}>
        <NavBar />

        <Row id="home-top">
          <Col id="home-top-part">
            <Row id="home-top-row">
              <Col />
              <Col>
                <h1>Search For Jobs</h1>
              </Col>
              <Col />
            </Row>
            <Row id="home-mid-row">
              <Col md="2" />
              <Col md="4">
              <form onSubmit={this.handleSubmit}>
              <InputGroup>
                  {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
                  <Input type='text' className='jobSearch' id='course' placeholder="search for Course Title" onChange={this.handleChange}/>
                </InputGroup>
              </form>
              </Col>
            <Col md="4">
              <form onSubmit={this.handleSubmit}>
              <InputGroup>
                  <Input type='text' className='location' id='location' value={this.state.place} placeholder='Insert Location' onChange={this.handleChange} />
                  <InputGroupButtonDropdown
                  
                    addonType="append"
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggleDropDown}
                  >
                    <DropdownToggle caret color="success">
                      Places
                    </DropdownToggle>
                    <DropdownMenu id="home-place-dropdown" >
                      {/*  */}
                      {state &&
                        state.map((sta, i) => {
                            console.log(sta.state)
                          return (
                            <DropdownItem onClick={() => this.transfer(sta.state)} key={i}>{sta.state}</DropdownItem>
                          );
                        })}
                    </DropdownMenu>
                  </InputGroupButtonDropdown>
                  <Button id="home-top-btn" color="success">
                    Go
                  </Button>
                </InputGroup>
              </form>
            </Col>
              <Col md="2" />
            </Row>
            <Row>
            <Col md="2"></Col>
            <Col md="4">
            <div className='search-divs'>
            <SearchDropDown searchError={this.state.searchError} SearchProp={this.state.search} className='searchDrop-style' />

            </div>
            </Col>
            <Col md="4"></Col>
            <Col md="2"></Col>
            </Row>
            
          </Col>
        </Row>
        <Container>
          <Row className="home-row">
            <Col md="12" id="home-latest-jobs-h3Col">
              <h3>Latest Jobs</h3>
            </Col>
          </Row>
          <Row id="home-latest-jobs-cards">
            {jobs && jobs.length > 0 ? (
              jobs.map(job => {
                return (
                  <Col md="3" className="home-latest-jobs" key={job}>
                    <Card body>
                      <CardTitle>{job.jobTitle}</CardTitle>
                      <CardText>{job.state}</CardText>
                     <Link to={`/Explore/${job._id}`}><Button color="success">Apply Now</Button></Link> 
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div>loading...</div>
            )}
          </Row>
          {/* <Row id='home-bottom-div'> */}

          {/* </Row> */}

          <Row className="home-row" id="home-row-sub-div">
            <Col md="2" />
            <Col md="8" id="home-subscription-div">
              <Row>
                <Col md="7" id="home-sud-txt-cover">
                  <h3>Subscribe for latest job update</h3>
                  
                      <SubscribeModal subscribe='subscribe'/>
                  
                </Col>
                <Col md="5"></Col>
              </Row>
            </Col>
            <Col md="2" />
          </Row>
          <Row>
            <Col md="12" id="home-bottom-header">
              <h2>Browse jobs</h2>
            </Col>
          </Row>
          <Row id="home-row-bottom">
            <Col md="3">
              <ul>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
              </ul>
            </Col>
            <Col md="3">
              <ul>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
              </ul>
            </Col>
            <Col md="3">
              <ul>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
              </ul>
            </Col>
            <Col md="3">
              <ul>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
                <li>Porn Vancy</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Home;
