/** @format */

import React from "react";
import HOC from "./User/HOC";

const TwelveScreen = () => {
  return (
    <>
      <div className="twelveFirst">
        <div className="left">
          <p className="head">Saved Documents</p>

          <div className="two-sec">
            <p>Case name:45623afasfs</p>
            <img src="./Images/100.png" alt="" />
          </div>
          <div className="two-sec">
            <p>Case name:45623afasfs</p>
            <img src="./Images/100.png" alt="" />
          </div>
          <div className="two-sec">
            <p>Case name:45623afasfs</p>
            <img src="./Images/100.png" alt="" />
          </div>
          <div className="two-sec">
            <p>Case name:45623afasfs</p>
            <img src="./Images/100.png" alt="" />
          </div>
        </div>

        <div className="right">
          <p>Case notes</p>

          <div className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(TwelveScreen);