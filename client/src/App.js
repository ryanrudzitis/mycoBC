import React from "react";
import { Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import RecordList from "./components/recordList";

const App = () => {

  //filter logic here? maybe as a state? using button result from dropdown
  // somehow pass onclicks to record list? through to record?

  function edible() {
    return <Link to="/invoices">Invoices</Link>
  }

  function poisonous() {
    console.log("filter by poison")
  }

  return (

    <div style={{ backgroundColor: "rgb(252, 68, 68)" }}>
      {/* <Navbar /> */}
      {/* <Route exact path="/"> */}
      <Navbar bg="dark" variant="dark" className='mb-2'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'     '}
            mycoBC
          </Navbar.Brand>
          <NavDropdown title="Filter" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/recordList"}>Edible</NavDropdown.Item>
            
            <NavDropdown.Item onClick={poisonous}>Poisonous</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      {/* inform user of filter status here, conditional rendering of an element */}
      <RecordList/> {/*open recordList with filter option in props*/}
    </div>
  );
};

export default App;