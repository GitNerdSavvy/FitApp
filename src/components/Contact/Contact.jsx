import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="join" id="contact">
      <div className="left-j">
        <hr />
        <div>
          <span className="text-stroke">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="text-stroke">with us</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
            <input type="email" name="User_email" placeholder="Enter your Email" />
            <button className="btn btn-j">Join Now</button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
