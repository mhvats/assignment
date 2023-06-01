import React from "react";
// import bgImg from "./component/img/Rectangle 15.png";
import { Right } from "./component/right";
import { Left } from "./component/left";
import "./design.css";

const Login: React.FC = () => {
 

  return (
    <div className="flex main-container">
      {/* this section contains bg wallpaper */}
      <Left />
      {/* this section contains login input field */}
      <Right />
    </div>
  );
};

export default Login;
