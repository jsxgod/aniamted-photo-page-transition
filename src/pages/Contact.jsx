import React, { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-page">
      <div className="contact-title">
        <h2>Contact us</h2>
        <p>Have any questions? We'd love to hear from you.</p>
      </div>
      <div className="contact-info-container">
        <div className="contact-info-title">Contact Information</div>
        <div className="contact-info-subtitle">
          Fill up the form and our Team will get back to You within 24 hours.
        </div>
        <div className="contact-details">
          <div className="info-row">
            <div className="info-icon">
              <GiRotaryPhone />
            </div>
            <div className="info">+00 123 456 789</div>
          </div>
          <div className="info-row">
            <div className="info-icon">
              <MdEmail />
            </div>
            <div className="info">modelagency@mail.com</div>
          </div>
          <div className="info-row">
            <div className="info-icon">
              <MdLocationPin />
            </div>
            <div className="info">123 Street City</div>
          </div>
        </div>
        <div className="contact-links-container">
          <button className="contact-link">
            <FaFacebook />
          </button>
          <button className="contact-link">
            <FaTwitter />
          </button>
          <button className="contact-link">
            <FaInstagram />
          </button>
          <button className="contact-link">
            <FaLinkedin />
          </button>
        </div>
      </div>
      <form className="contact-form" onSubmit={(event) => handleSubmit(event)}>
        <label className="input-label first-name">
          Name
          <input
            className="custom-input first-name"
            type="text"
            value={firstName}
            placeholder={"Name"}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label className="input-label last-name">
          Last Name
          <input
            className="custom-input last-name"
            type="text"
            value={lastName}
            placeholder={"Last Name"}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label className="input-label email">
          Email
          <input
            className="custom-input email"
            type="text"
            value={email}
            placeholder={"name@mail.com"}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="input-label phone">
          Phone number
          <input
            className="custom-input phone"
            type="text"
            value={phoneNumber}
            placeholder={"+00 123 456 789"}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <div className="contact-preference">
          <label className="input-label preference">Contact preference</label>
          <div className="preference-options">
            <div className="contact-preference-option email">
              <label className="radio-label preference">
                <input
                  type="radio"
                  name="contact-preference"
                  value="Email"
                  className="radio-input"
                />
                Email
              </label>
            </div>
            <div className="contact-preference-option phone">
              <label className="radio-label preference">
                <input
                  type="radio"
                  name="contact-preference"
                  value="Phone"
                  className="radio-input"
                />
                Phone
              </label>
            </div>
          </div>
        </div>
        <div className="form-message">
          <label className="input-label">Message</label>
          <textarea
            className="message-input"
            type="text"
            value={message}
            placeholder={"Write your message"}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className="form-button-wrapper">
          <button className="form-button">
            <RiMailSendLine />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
