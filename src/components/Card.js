import React from "react";
import "../styles/Page1.css";
import timer1 from "./images/timer1.svg";
import employee1 from "./images/employee1.svg";
import data1 from "./images/data1.svg";
import calendar1 from "./images/calendar1.svg";
import telephone1 from "./images/telephone1.svg";
import client from "./images/client.svg";
import virtual from "./images/virtual.svg";
const Page6 = (props) => {
  let img;
  if (props.img === "1") {
    img = <img src={timer1} alt=""></img>;
  } else if (props.img === "2") {
    img = <img src={employee1} alt=""></img>;
  } else if (props.img === "3") {
    img = <img src={data1} alt=""></img>;
  } else if (props.img === "4") {
    img = <img src={calendar1} alt=""></img>;
  } else if (props.img === "5") {
    img = <img src={telephone1} alt=""></img>;
  } else if (props.img === "6") {
    img = <img src={client} alt=""></img>;
  } else {
    img = <img src={virtual} alt=""></img>;
  }
  return (
    <>
      <div className="card" id="card">
        <div className="card-body " id="card">
          <div className="centralize">{img}</div>
          <div className="card-summary">
            <p className="blue-card-heading ">{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
