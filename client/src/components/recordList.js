import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap';
import MushroomInfo from './mushroomInfo';

const myStyle = {
  padding: 2,
  margin: '0 auto',
  width: '18rem'
};

const Record = (props) => (

  <Card style={myStyle} className='mb-2 text-center'>
    <Card.Img variant="top" src={props.record.img} />
    <Card.Body>
      <Card.Title>{props.record.name}</Card.Title>
      <MushroomInfo {...props} />
      {/* <Button variant="primary" onClick={() => console.log("hello")}>Learn more</Button> */}
    </Card.Body>
  </Card>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        this.setState(
          {
            records: response.data
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  filterStatus() {
    if(this.props.filterBy != "none") {
      console.log("filtering!");
      return (
        <div style={{
          fontSize: "25px"
        }}>
          <p>Filtering by: {this.props.filterBy}</p>
        </div>
      );
    }
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      if(this.props.filterBy === "edible") {
        if (currentrecord.edible.includes("Yes")) {
          return (
            <Record
              record={currentrecord}
              key={currentrecord._id}
            />
          );
        }
      } else if (this.props.filterBy === "poisonous") {
        if (currentrecord.poisonous.includes("Yes")) {
          return (
            <Record
              record={currentrecord}
              key={currentrecord._id}
            />
          );
        }
      } else {
        return (
          <Record
            record={currentrecord}
            key={currentrecord._id}
          />
        );
      }
    });
  }

  // This following section will display a card for each database record
  render() {
    return (
      <div className='mb-3 text-center'>
        {this.filterStatus()}
        {this.recordList()}
      </div>
    );
  }
}