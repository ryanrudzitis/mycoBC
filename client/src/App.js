import React, { useState } from "react";
import { Navbar, NavDropdown, Container } from 'react-bootstrap';

// We import all the components we need in our app
import RecordList from "./components/recordList";

export default function App() {
  // used to track if filtering should be active
  const [filter, setFilter] = useState("none");

  function toggleFilter(filterBy) {
    if(filter != filterBy) {
      setFilter(filterBy);
    } else {
      setFilter("none");
    }
  }

  const Nav = (props) => (
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
          <NavDropdown title="Filter" id="basic-nav-dropdown" menuVariant="dark">
            <NavDropdown.Item onClick={() => toggleFilter("edible")}>Edible</NavDropdown.Item>
            <NavDropdown.Item onClick={() => toggleFilter("poisonous")}>Poisonous</NavDropdown.Item>
            <NavDropdown.Item>Month</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
  );
  
  return (
    <div style={{ backgroundColor: "rgb(252, 68, 68)" }}>
      <Nav/>
      <RecordList filterBy={filter}/>
    </div>
  );
};