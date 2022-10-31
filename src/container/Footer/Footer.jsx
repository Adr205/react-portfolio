import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then((res) => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
  };
  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:adrianvillal@hotmail.com" className="p-text">
            Adrianvillal@hotmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+52 (656) 352-9786" className="p-text">
            +52 (656) 352-9786
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChangeInput}
          ></input>
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChangeInput}
          ></input>
        </div>

        <div>
          <textarea
            className="p-text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChangeInput}
          ></textarea>
        </div>

        <button className="p-text" type="button" onClick={handleSubmit}>
          {loading ? "Sending" : "Send Message"}
        </button>
      </div>
      ) : (
        <div className="">
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )
      }

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
