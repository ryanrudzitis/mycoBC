import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap';
import MushroomInfo from './mushroomInfo';
import { Button } from 'react-bootstrap'
// import img from "./../img/the_prince.jpg";

const path = "./../../img/";


const Record = (props) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.record.img} />
    <Card.Body>
      <Card.Title>{props.record.name}</Card.Title>
      {/* <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text> */}
      <MushroomInfo {... props}/>
      {/* <Button variant="primary" onClick={() => console.log("hello")}>Learn more</Button> */}
    </Card.Body>
  </Card>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    // this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        this.setState({ records: response.data });
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  // deleteRecord(id) {
  //   axios.delete("http://localhost:5000/" + id).then((response) => {
  //     console.log(response.data);
  //   });

  //   this.setState({
  //     record: this.state.records.filter((el) => el._id !== id),
  //   });
  // }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This following section will display a card for each database record
  render() {
    return (
      <div>
        {this.recordList()}
      </div>

    );
  }
}

// function ShowMushroomInfo(props) {
//   const showAlert = usePopup();

//   showAlert({
//     title: "Error",
//     type: DialogType.WARNING,
//     text: "A simple error alert"
// });

  
// }
