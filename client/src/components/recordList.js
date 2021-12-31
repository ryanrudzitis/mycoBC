import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { Card, Modal, Button } from 'react-bootstrap';
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
      {/* <MushroomInfo {...props} /> */}
      <Button variant="primary" onClick={props.onClick}>Learn more</Button>
    </Card.Body>
  </Card>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      show: false,
      modalTitle: "",
      modalBody: null
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState(
      {
        show: false
      });
  }

  handleShow(currentRecord) {
    let mushroomInfo = (<><p>{"Binomial: " + currentRecord.binomial}</p>
    <p>{"Edible: " + currentRecord.edible}</p>
    <p>{"Poisonous: " + currentRecord.poisonous}</p>
    <p>{"Availability: " + currentRecord.availability}</p></>)

    console.log(mushroomInfo);
    this.setState(
      {
        show: true,
        modalTitle: currentRecord.name,
        modalBody: mushroomInfo
      });

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
    if (this.props.filterBy != "none") {
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
      if (this.props.filterBy === "edible") {
        if (currentrecord.edible.includes("Yes")) {
          return (
            <Record
              record={currentrecord}
              onClick={() => this.handleShow(currentrecord)}
              key={currentrecord._id}
            />
          );
        }
      } else if (this.props.filterBy === "poisonous") {
        if (currentrecord.poisonous.includes("Yes")) {
          return (
            <Record
              record={currentrecord}
              onClick={() => this.handleShow(currentrecord)}
              key={currentrecord._id}
            />
          );
        }
      } else {
        return (
          <Record
            record={currentrecord}
            onClick={() => this.handleShow(currentrecord)}
            key={currentrecord._id}
          />
        );
      }
    });
  }

  render() {
    return (
      <div className='mb-3 text-center'>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.state.modalBody}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose} >Close</Button>
          </Modal.Footer>
        </Modal>
        {this.filterStatus()}
        {this.recordList()}
      </div>
    );
  }
}