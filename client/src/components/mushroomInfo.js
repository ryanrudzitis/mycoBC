import { Button, Modal } from 'react-bootstrap';
import React, { useState } from "react";

function MushroomInfo(props) {

  // const { showAlert } = usePopup();
  const buttonPressed = () => {
    let infoText = "";
    infoText += props.record.name + "\n\n";
    infoText += "Binomial: " + props.record.binomial + "\n";
    infoText += "Edible: " + props.record.edible + "\n";
    infoText += "Poisonous: " + props.record.poisonous + "\n";
    infoText += "Availability: " + props.record.availability;

    console.log(infoText);

    alert(infoText);
    // I want a react-bootstrap modal instead
  }

  return (
    <>
      <Button variant="primary" onClick={buttonPressed}>Learn more</Button>
      <div style={{
        position: 'absolute',
        top: '100px',
        right: '100px'
      }}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}
export default MushroomInfo;