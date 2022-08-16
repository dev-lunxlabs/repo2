import React from "react";
import "../../styles/Page1.css";
import Card from "../Card";
import timer1 from "../images/timer1.svg";
const Page6 = (props) => {
  return (
    <>
      <section className="container">
        <div className="mt-50 page6-div">
          <p className="page6-title">
            All the tools you need to grow, not just a booking system
          </p>
        </div>
        <div className="card-row1 mt-25 mb-20">
          <Card img="1" content="Schedule time" />
          <Card img="2" content="Seamless Payments" />
          <Card img="3" content="Attendance tracking" />
          <Card img="4" content="Custom Website" />
          <Card img="5" content="Automated email" />
        </div>

        <div className="card-row2 mt-25 mb-20">
          <Card img="6" content="Client management" />
          <Card img="7" content="Virtual, in-person" />
          <Card img="2" content="Embed to website" />
          <Card img="3" content="Schedule time" />
          <Card img="1" content="And much more" />
        </div>
        <div className="mt-50 red-button">
          <button className="start-btn red text-white">
            View all features
          </button>
        </div>
      </section>
    </>
  );
};

export default Page6;
