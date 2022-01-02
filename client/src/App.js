import React, { useState } from "react";
import { Navbar, NavDropdown, Dropdown, Container } from 'react-bootstrap';

// We import all the components we need in our app
import RecordList from "./components/recordList";

export default function App() {
  // used to track when filtering should be active
  const [filter, setFilter] = useState("none");

  function toggleFilter(filterBy) {
    if (filter != filterBy) {
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
          <NavDropdown.Item onClick={() => toggleFilter("Edible")}>Edible</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("Poisonous")}>Poisonous</NavDropdown.Item>
          <Dropdown.Divider />
          <NavDropdown.Item onClick={() => toggleFilter("January")}>January</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("February")}>February</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("March")}>March</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("April")}>April</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("May")}>May</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("June")}>June</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("July")}>July</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("August")}>August</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("September")}>September</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("October")}>October</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("November")}>November</NavDropdown.Item>
          <NavDropdown.Item onClick={() => toggleFilter("December")}>December</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );

  return (
    <div style={{ backgroundColor: "rgb(252, 68, 68)" }}>
      <Nav />
      <RecordList filterBy={filter} />
    </div>
  );
};