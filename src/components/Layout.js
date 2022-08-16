import React from "react";
import "../styles/Page1.css";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import pic4 from "./images/pic4.png";
import pic5 from "./images/pic5.png";
import pic6 from "./images/pic6.png";
import pic7 from "./images/pic7.png";
import pic8 from "./images/pic8.png";
import pic9 from "./images/pic9.png";
import pic10 from "./images/pic10.png";
import asus from "./images/asus2.svg";
import vans from "./images/vans2.svg";
import adidas from "./images/adidas2.svg";

const Layout = (props) => {
  const leftDiv = {
    order: 1,
  };
  const rightDiv = {
    order: 2,
  };
  const hideDisplay = {
    display: "none",
  };
  let div1, div2, hideImages, imageDiv;
  imageDiv = <img src={pic1} alt=""></img>;

  if (props.order === "1") {
    div1 = leftDiv;
    div2 = rightDiv;
    imageDiv = <img src={pic1} alt=""></img>;
  } else if (props.order === "2") {
    div1 = rightDiv;
    div2 = leftDiv;
    imageDiv = <img src={pic2} alt=""></img>;
  } else if (props.order === "3") {
    div1 = leftDiv;
    div2 = rightDiv;

    // imageDiv = (
    //   <>
    //     <div className="image3">
    //       <img src={pic3} alt=""></img>
    //     </div>
    //     <div className="image4">
    //       <img src={pic4} alt=""></img>
    //     </div>
    //     <div className="image5">
    //       <img src={pic5} alt=""></img>
    //     </div>
    //   </>
    // );
  } else {
    div1 = rightDiv;
    div2 = leftDiv;
    imageDiv = (
      <>
        <div className="flex-clm">
          <div className="column-1 mt-25">
            <img className="mt-10" src={pic6} alt=""></img>
            <img className="mt-10" src={pic7} alt=""></img>
          </div>
          <div className="column-2">
            <img className="mt-10" src={pic8} alt=""></img>
            <img className="mt-10" src={pic9} alt=""></img>
          </div>
          <div className="column-3">
            <img src={pic10} alt=""></img>
          </div>
        </div>
      </>
    );
  }
  if (props.works == null) {
    hideImages = hideDisplay;
  }

  return (
    <>
      <section className=" mt-150 mb-75">
        <div className="flex-container ">
          <div className="content" style={div1}>
            <div className="red-title">
              <p>{props.title}</p>
            </div>
            <div className="information-div">
              <p className="information">{props.content}</p>
              <p className="works">{props.works}</p>
            </div>
            <div className="brands mb-10" style={hideImages}>
              <img className="works-with" src={asus} alt=""></img>
              <img className="works-with" src={vans} alt=""></img>
              <img className="works-with" src={adidas} alt=""></img>
            </div>
            <div className="buttons mt-10">
              <button className="start-btn text-white">Start For Free</button>
              <button className="book-btn text-dark">Book a demo</button>
            </div>
          </div>
          <div className="images" style={div2}>
            {imageDiv}
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
