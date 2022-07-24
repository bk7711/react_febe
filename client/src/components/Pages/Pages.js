import React from "react";
import { FcReading, FcApproval, FcGraduationCap, FcNews } from "react-icons/fc";
import "./Pages.css";

const iconStyles = { fontSize: "50px", padding: "0px 15px" };

const Pages = () => {
  return (
    <div className="page-icons">
      <FcReading style={iconStyles} />
      <FcApproval style={iconStyles} />
      <FcNews style={iconStyles} />
      <FcGraduationCap style={iconStyles} />
    </div>
  );
};

export default Pages;
