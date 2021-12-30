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
  }

  return (
    <Button variant="primary" onClick={buttonPressed}>Learn more</Button>
  );
}
export default MushroomInfo;