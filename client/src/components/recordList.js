import React, { Component } from "react";
import { Card, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const myStyle = {
  padding: 2,
  margin: '0 auto',
  width: '18rem'
};

const MushroomCard = (props) => (
  <Card style={myStyle} className='mb-2 text-center'>
    <Card.Img variant="top" src={props.record.img} />
    <Card.Body>
      <Card.Title>{props.record.name}</Card.Title>
      <Button variant="primary" onClick={props.onClick}>Learn more</Button>
    </Card.Body>
  </Card>
);

export default class RecordList extends Component {
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
    let mushroomInfo = (<>
      <p>{"Binomial: " + currentRecord.binomial}</p>
      <p>{"Edible: " + currentRecord.edible}</p>
      <p>{"Poisonous: " + currentRecord.poisonous}</p>
      <p>{"Availability: " + currentRecord.availability}</p>
    </>)

    this.setState(
      {
        show: true,
        modalTitle: currentRecord.name,
        modalBody: mushroomInfo
      });

  }

  // This method will get the data from the database and store it in state
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

  mushroomModal = (props) => (
    <Modal show={this.state.show} onHide={this.handleClose} size='sm'>
      <Modal.Header closeButton>
        <Modal.Title>{this.state.modalTitle}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {this.state.modalBody}
        <Button variant="secondary" onClick={this.handleClose} >Close</Button>
      </Modal.Body>

    </Modal>
  );

  filterStatus() {
    if (this.props.filterBy != "none") {
      return (
        <div style={{
          fontSize: "25px"
        }}>
          <p>Filtering by: {this.props.filterBy}</p>
        </div>
      );
    }
  }

  //filterfunction
  //filter(filterBY)


  // pass filter function into props! maybe
  recordList() {

    return this.state.records.map((currentrecord) => {
      let filterQuery = false;

      if (this.props.filterBy === "Edible") {
        filterQuery = currentrecord.edible.includes("Yes");
      } else if (this.props.filterBy === "Poisonous") {
        filterQuery = currentrecord.poisonous.includes("Yes");
      } else if(this.props.filterBy != "none") { // filter by month
        console.log("filter by month!");
        console.log(this.props.filterBy);
        filterQuery = currentrecord.availability.includes(this.props.filterBy);
      } else {
        filterQuery = true;
      }

      if (filterQuery) {
        return (
          <MushroomCard
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
        {this.mushroomModal()}
        {this.filterStatus()}
        {this.recordList()}
      </div>
    );
  }
}