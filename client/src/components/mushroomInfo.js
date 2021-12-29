import { Button } from 'react-bootstrap';
import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import { usePopup, DialogType } from "react-custom-popup";


const MushroomInfo = (props) => {


  // const { showAlert } = usePopup();

  const buttonPressed = () => {
    let infoText = "";
    infoText += "Binomial: " + props.record.binomial + "\n";
    infoText += "Edible: " + props.record.edible + "\n";
    infoText += "Poisonous: " + props.record.poisonous + "\n";
    infoText += "Availability " + props.record.availability;


    console.log(infoText);

    // show modal here 
    // showAlert({
    //     title: props.record.name,
    //     type: DialogType.INFO,
    //     text: infoText
    // });

  }

  //return modal?
  return (
    <>
      <Button variant="primary" onClick={buttonPressed}>Learn more</Button>
    </>
  );
}
export default MushroomInfo;