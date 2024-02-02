import ContactInfo from "./ContactInfo.jsx";
import Form from "./Form.jsx";
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.contactTitle}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to me!</p>
      </div>

      <div className={styles.contactContent}>
        <ContactInfo />
        <Form />
      </div>
    </div>
  );
};

export default Contact;