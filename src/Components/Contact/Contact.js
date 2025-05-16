import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll"
const FacebookIcon = "/assets/facebook-icon.png";
const TwitterIcon = "/assets/twitter.png";
const linkedinIcon = "/assets/linkedin.png";
const InstagramIcon = "/assets/instagram.png";


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xl90w92", "service_xl90w92", form.current, {
        publicKey: "WIagJHjeRYYT6f0X2in25",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section id="contactPage">
       
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss the work oppportunities
          </span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name='your_name' />
            <input type="email" className="email" placeholder="Your Email" name="your_email" />
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" value="send" className="submitBtn">
              {" "}
              Submit
            </button>
            <div className="links">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100018186107595" > <img src={FacebookIcon} alt="Facebook" className="link" /></a>
             
              <a target="_blank" href="https://x.com/PriyanshuuM?t=qeuNF3wzWdN4yxuX-uoBqg&s=09"> <img src={TwitterIcon} alt="Twitter" className="link" /> </a>
              <a target="_blank" href="https://www.linkedin.com/in/priyanshu-mishra-128b4722a/"> <img src={linkedinIcon} alt="linkedin" className="link" /> </a>
              <a target="_blank" href="https://www.instagram.com/priyanshuumishraa/"> <img src={InstagramIcon} alt="Instagram" className="link" /> </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;
