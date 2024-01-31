import ContactInfo from "./ContactInfo.jsx";
import Form from "./Form.jsx";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to me!</p>
      </div>

      <div className="contact-content">
        <ContactInfo />

        <div className="contact-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;