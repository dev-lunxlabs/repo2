import React from "react";
import Styles from "./Footer.module.css";
import prodname from "./images/PRODname.png";
import adidas from "./images/adidas3.svg";
import visa from "./images/visa3.svg";
import nestle from "./images/nestle3.svg";
const Footer = () => {
  return (
    <>
      <section className={Styles.black}>
        <div className={Styles.footer}>
          <div className={Styles.prodname}>
            <img src={prodname} alt=""></img>
            <div className={Styles.brands}>
              <img className={Styles.logos} src={adidas} alt=""></img>
              <img className={Styles.logos} src={nestle} alt=""></img>
              <img className={Styles.logos} src={visa} alt=""></img>
            </div>
          </div>
          <div className={Styles.product}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>Product</p>
              <p className={Styles.content}>Start free trial</p>
              <p className={Styles.content}>How it works</p>
              <p className={Styles.content}>Request a demo</p>
              <p className={Styles.content}>Features</p>
            </div>
          </div>
          <div className={Styles.resources}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>Resources</p>
              <p className={Styles.content}>Start free trial</p>
              <p className={Styles.content}>How it works</p>
              <p className={Styles.content}>Request a demo</p>
              <p className={Styles.content}>Features</p>
            </div>
          </div>
          <div className={Styles.company}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>Company</p>
              <p className={Styles.content}>Start free trial</p>
              <p className={Styles.content}>How it works</p>
              <p className={Styles.content}>Request a demo</p>
              <p className={Styles.content}>Features</p>
            </div>
          </div>
          <div className={Styles.socials}>
            <div className={Styles.socialMedia}>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={Styles.lastDiv}>
          <div className={Styles.lastSubDiv}>
            <p className={Styles.lastText}>PRIVACY</p>
            <p className={Styles.lastText}>HELP</p>
            <p className={Styles.lastText}>TERMS OF SERVICE</p>
          </div>

          <p className={Styles.lastText}>© 2018 - 2022 NFTSTUBS, LLC.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
