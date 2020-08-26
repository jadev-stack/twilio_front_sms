import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Screens/Home/Home";
import Message from "./Screens/Message/Message";
import Audience from "./Screens/Audience/Audience";
import End from "./Screens/End/End";

import { sendMessage } from "./utils/api";

function App() {
  const [state, setState] = useState(1);
  const [message, setMessage] = useState();
  let component = null;

  const nextStep = () => {
    setState(state + 1);
  };
  const goBack = () => {
    setState(state - 1);
  };
  const home = () => {
    setState(1);
  };

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const send = async (numbers) => {
    try {
      console.log("Sending message:", message, "to: ", numbers);
      const res = await sendMessage(numbers, message);
      console.log("API response :>", res.data);
      nextStep(); 
    } catch (e) {
      console.error(e.response);
      
    }
  };

  switch (state) {
    case 1:
      component = <Home next={nextStep} />;
      break;
    case 2:
      component = (
        <Message next={nextStep} goBack={goBack} change={changeMessage} />
      );
      break;
    case 3:
      component = <Audience send={send}  goBack={goBack} />;
      break;
    case 4:
      component = <End home={home} />;
      break;
    default:
      component = <Home next={nextStep} />;
  }
  return <div>{component}</div>;
}

export default App;
