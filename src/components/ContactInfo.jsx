
const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div className="box">
        <div className="icon"><i className='bx bx-map'></i></div>
        <div className="text">
          <h3>Location</h3>
          <p>Jalisco, Mexico</p>
        </div>
      </div>
      <div className="box">
        <div className="icon"><i class='bx bx-phone'></i></div>
        <div className="text">
          <h3>Phone</h3>
          <p>+52 332-968-6053</p>
        </div>
      </div>
      <div className="box">
        <div className="icon"><i className='bx bx-envelope'></i></div>
        <div className="text">
          <h3>Email</h3>
          <p>garciacolin@hotmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;