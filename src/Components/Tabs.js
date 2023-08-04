import React from "react";
import "./Tabs.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Tabs = () => {
  return (
    <div className="Tabs__container">
      <button class="dropdown-button">
        Movie Type <span class="arrow">&#9660;</span>
      </button>
      <button class="dropdown-button">
        Price <span class="arrow">&#9660;</span>
      </button>
      <button class="dropdown-button">
        Review <span class="arrow">&#9660;</span>
      </button>
      <button class="dropdown-button">
        Offer <span class="arrow">&#9660;</span>
      </button>
      <button class="dropdown-button">
        All Fliters <span class="arrow">&#9660;</span>
      </button>
    </div>
  );
};

export default Tabs;
