import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="Container">
      <div className="logo">
        {/* logo here */}
        <img
          src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
          alt="Cart logo"
        />
      </div>
      <div className="options">
        <a href="#">Category</a>
        <ArrowDropDownIcon fontSize="small" />
        {/* categories */}
        <a href="#">Deals</a>
        <ArrowDropDownIcon fontSize="small" />
        {/* deals */}
        <a href="#">What's New</a>
        <ArrowDropDownIcon fontSize="small" />
        {/* whats new */}
        <a href="#">Delivery</a>
        <ArrowDropDownIcon fontSize="small" />
        {/* delivery */}
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search your movie" />
        <SearchIcon fontSize="large" className="search__Icon" />
        {/* search bar */}
      </div>
      <div className="account__Cart">
        <PersonOutlineIcon fontSize="medium" />
        <p>Account</p>
        {/* Account icon  */}
        <AddShoppingCartIcon />
        <p>Cart</p>
        {/* cart icon */}
      </div>
    </div>
  );
};

export default Navbar;
