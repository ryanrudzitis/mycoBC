import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RecordList from "./components/recordList";
import { BrowserRouter, Route, Routes } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="recordList" element ={<RecordList/>}></Route>
      </Routes> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);