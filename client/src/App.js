import React from "react";
import {Navbar, Container } from 'react-bootstrap';


// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import RecordList from "./components/recordList";

const App = () => {

  //filter logic here? maybe as a state? using button result from dropdown
  // somehow pass onclicks to record list? through to record?

  return (

    <div style={{backgroundColor: "rgb(252, 68, 68)"}}>
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
            />{'      '}
            mycoBC
          </Navbar.Brand>
        </Container>
      </Navbar>

      <RecordList /> {/*open recordList with filter option in props*/}

      {/* </Route> */}
      {/* <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route> */}
    </div>
  );
};

export default App;