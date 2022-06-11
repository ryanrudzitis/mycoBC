import React, { Component } from "react";
import { Card, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";

const cardStyle = {
  padding: 2,
  margin: '0 auto',
  width: '18rem'
};

const MushroomCard = (props) => (
  <Card style={cardStyle} className='mb-2 text-center'>
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
      .get("http://localhost:3003/record/")
      .then((response) => {
        this.setState(
          {
            records: response.data
          });
      })
      .catch(function (error) {
        console.log(error);
      });

        // post to database with axios
        axios
        .get("http://localhost:3003/postRecord/")
        .then((response) => {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });



        
    
  }

  // popup displaying mushroom info when user clicks "learn more"
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

  // render div that notifies user of current filter
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

  recordList() {
    return this.state.records.map((currentrecord) => {
      let filterQuery = false;

      if (this.props.filterBy === "Edible") {
        filterQuery = currentrecord.edible.includes("Yes");

      } else if (this.props.filterBy === "Poisonous") {
        filterQuery = currentrecord.poisonous.includes("Yes");

      } else if(this.props.filterBy != "none") { // filter by month
        filterQuery = currentrecord.availability.includes(this.props.filterBy);

      } else { // no filter
        filterQuery = true;
      }

      // if current record from db passes filter
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
      <div className='card-container mb-3 text-center'  style={{ backgroundColor: "rgb(252, 68, 68)" }}>
        {this.mushroomModal()}
        {this.filterStatus()}
        {this.recordList()}
      </div>
    );
  }
}