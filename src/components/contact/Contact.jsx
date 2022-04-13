import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ofbv2vg",
      "template_u69v30p",
      form.current,
      "Fth039GCYhwYPM5Y4"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className="center__heading">Get In Touch</h5>
      <h2 className="center__heading">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ddaprincem84@gmail.com</h5>
            <a href="mailto:ddaprincem84@gmail.com" target="__blank">
              Send a Email
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn__align">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
