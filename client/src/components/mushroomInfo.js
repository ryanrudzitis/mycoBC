import { Button } from 'react-bootstrap';
import {usePopup, DialogType} from "react-custom-popup";


const MushroomInfo = (props) => {

  const {showAlert} = usePopup();

  const buttonPressed = () => {
    console.log("help");
      showAlert({
          title: "Error",
          type: DialogType.WARNING,
          text: "A simple error alert"
      });

  }
  
  return (
    <Button variant = "primary" onClick={buttonPressed}>Learn more</Button>
    );
  }
  export default MushroomInfo;