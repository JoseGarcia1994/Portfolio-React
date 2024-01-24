import { useState } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = "service_aj1wir2"
    const templateId = "template_tzhz1yn"
    const publicKey = "55nqFhEK34DY6RECA"

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jose Garcia",
      message: message,
    };
    
    //Send the emaail using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then( (res) => {
        console.log("Email sent successfully", res);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch( err => {
        console.error(`Failed to send email`, err);
      })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Send Message</h2>
      <div className="inputBox">
      <label htmlFor="name">Full Name</label>
        <input
        id="name"
          type="text"
          value={name}
          onChange={ e => setName(e.target.value)} 
        />
        <span className="input-icon"><i class='bx bx-user-circle bx-sm'></i></span>
      </div>

      <div className="inputBox">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />
        <span className="input-icon"><i className='bx bx-envelope bx-sm'></i></span>
      </div>

      <div className="inputBox">
        <label htmlFor="messsage">Type you message...</label>
        <textarea
          cols="30"
          rows="3"
          value={message}
          onChange={e => setMessage(e.target.value)} 
        >
        </textarea>
      </div>

      <div className="form-btn">
        <input type="submit" className="btnn" />
      </div>
    </form>
  );
};

export default Form;