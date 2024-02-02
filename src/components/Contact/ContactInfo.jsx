import { profile } from '../../data';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      {
        profile.contactInfo.map(contact => (
          <div className={styles.contactBox} key={contact.id}>
            <div className={styles.contactIcon}>{contact.icon}</div>
            <div className={styles.contactDetails}>
              <h3>{contact.title}</h3>
              <p>{contact.contact}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ContactInfo;