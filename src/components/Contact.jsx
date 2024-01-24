import ContactInfo from "./ContactInfo.jsx";
import Form from "./Form.jsx";

const Contact = () => {
  return (
    <>
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to me!</p>
      </div>

      <div className="contact-container">
        <ContactInfo />

        <div className="contact-form">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;