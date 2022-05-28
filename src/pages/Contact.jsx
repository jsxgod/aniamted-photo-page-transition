import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiMailSendLine } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HamburgerButton, HamburgerRail, Menu } from "../components";

const mainVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
      ease: [0.6, 0.01, -0.05, 0.96],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, -0.05, 0.96],
    },
  },
};

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preference, setPreference] = useState("");
  const [message, setMessage] = useState("");
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      preference,
      message,
    };
    console.log(formData);
  };

  return (
    <motion.div
      className="contact-page"
      variants={mainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Menu opened={menuOpened} />
      <HamburgerRail>
        <HamburgerButton
          menuOpened={menuOpened}
          stateChanger={setMenuOpened}
          useMainVariants={true}
        />
      </HamburgerRail>
      <div className="contact-title">
        <h2>Contact us</h2>
        <p>Have any questions? We'd love to hear from you.</p>
      </div>
      <div className="contact-info-container">
        <div className="contact-info-title">Contact Information</div>
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
          <a href="https://www.facebook.com" className="contact-link">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" className="contact-link">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" className="contact-link">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" className="contact-link">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="input-label first-name">
          Name
          <input
            className="custom-input first-name"
            type="text"
            value={firstName}
            placeholder={"Name"}
            onChange={(event) => setFirstName(event.target.value)}
            required
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
            required
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
            required
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
            required
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
                  onChange={(event) => setPreference(event.target.value)}
                  required
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
                  onChange={(event) => setPreference(event.target.value)}
                  required
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
            required
          />
        </div>
        <div className="form-button-wrapper">
          <button type="submit" className="form-button">
            <RiMailSendLine />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
