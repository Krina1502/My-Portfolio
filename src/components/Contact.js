import { FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-content">
        <div className="location">
          <FaMapMarkerAlt className="icon" />
          <p>ON, Canada (Open to relocate)</p>
        </div>

        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/krina-patel-961625250"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:krinampatel15@gmail.com"
            className="icon-link"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
