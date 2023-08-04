import React from "react";
import "./TopHeader.css";
import requests from "../requests";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  console.log(requests);
  return (
    <div className="top__Header">
      <div className="top__LeftHeader">
        <img
          className="contact__image"
          src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e884fbeaf853f075555d17_Call.svg"
          alt="contact image"
        />
        <p>+911234567895</p>
      </div>
      {/* LEFT >>>>>>> contact image and number */}

      <div className="top__MiddleHeader">
        <p>Get 50% Off on Selected Items | Shop Now</p>
      </div>
      {/* 50% off | shopnow  */}

      <div className="top__RightHeader">
        <div className="top__RightLanguage">
          <p>ENG</p>
          <ArrowDropDownIcon fontSize="small" />
        </div>

        <div className="top__RightCountry">
          <p>Location</p>
          <ArrowDropDownIcon fontSize="small" />
        </div>
      </div>
      {/* RIGHT >>>>>  ENG  and Location */}
    </div>
  );
};

export default Header;
