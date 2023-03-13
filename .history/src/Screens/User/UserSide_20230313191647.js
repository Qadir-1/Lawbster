/** @format */

import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserSide = () => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();


  return (
    <>
      <div className="UserSideBar">
        <div className="two-Sec">
          <div className="left">
            <i class="fa-solid fa-right-from-bracket"></i>
            <p>Log out</p>
          </div>

          <div className="right">
            <img src="./Images/95.png" alt="" />
            <p>₹5,000</p>
          </div>
        </div>

        <div className="center">
          <img src="./Images/97.png" alt="" />
          <p>Suhani Shukla</p>
          <div className="empty"></div>
        </div>

        <button onClick={() => navigate("/ten")}>My Lawyers</button>
        <button ref={buttonRef} onClick={() => navigate("/ninth")}>Upcoming Consultation</button>
        <button>Instant Appointment</button>
        <button>Saved Documents</button>
        <button>Book Appointment</button>
        <button>Legal Services</button>
        <button className="lastOne">
          {" "}
          <i class="fa-solid fa-play"></i> Download our app now
        </button>
      </div>
    </>
  );
};

export default UserSide;
