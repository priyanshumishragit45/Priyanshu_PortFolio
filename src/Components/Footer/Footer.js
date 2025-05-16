import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h1 className="footer-h1" >  Thanks for scrolling</h1>
       
        <p className="footer-p" > <img style={{height:"20px" , filter: "invert(1)", marginRight:"10px" }} src="/assets/phone.png" alt=""/>  Phone - +91 6263852929 
        <img style={{height:"40px" , filter: "invert(1)",  }} src="/assets/mail.png" alt=""/> 
        Email - priyanshuumishraa45@gmail.com </p>
      </footer>
    </>
  );
};

export default Footer;
