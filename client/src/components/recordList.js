import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Record = (props) => (
  // <tr>
  //   <td>{props.record.name}</td>
  //   <td>{props.record.binomial}</td>
  //   <td>{props.record.edible}</td>
  //   <td>{props.record.poisonous}</td>
  //   <td>{props.record.availability}</td>
  //   {/* <td>
  //     <Link to={"/edit/" + props.record._id}>Edit</Link> |
  //     <a
  //       href="/"
  //       onClick={() => {
  //         props.deleteRecord(props.record._id);
  //       }}
  //     >
  //       Delete
  //     </a>
  //   </td> */}
  // </tr>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{props.record.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary" onClick={() => console.log(props.record.binomial)}>Learn more</Button>
    </Card.Body>
  </Card>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
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
  deleteRecord(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      console.log('hello');
      console.log(this.state.records);
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        {/* <h3>Mushrooms!</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Binomial</th>
              <th>Edible</th>
              <th>Poisonous</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
        {this.recordList()}
      </div>

    );
  }
}