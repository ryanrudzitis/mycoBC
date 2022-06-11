import React, { useState } from "react";
import { Navbar, NavDropdown, Dropdown, Container } from 'react-bootstrap';


// import all the components we need in our app
import RecordList from "./components/recordList";

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
          {/* iterate over array */}
          {months.map((month, index) => (
            <NavDropdown.Item key={index} onClick={() => toggleFilter(month)}>
              {month}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Container>
    </Navbar>
  );

  return (

  <div class="outer-container" style={{ backgroundColor: "rgb(252, 68, 68)" }}>
    <Nav />
    <div>
      <RecordList filterBy={filter} />
    </div>
  </div>
  );
};