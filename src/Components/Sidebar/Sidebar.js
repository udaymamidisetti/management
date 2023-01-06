import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.css";
import Context from "../context/Context";

const Sidebar = () => {
  return (
    <Context.Consumer>
      {(value) => {
        const { darkTheme, toggleTheme } = value;

        return (
          <div className="sidebar">
            <img
              src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png"
              alt="Sun"
              className="sidebar-image"
            />
            <div className="sidebar-header">
              <button className="sidebar-close-button">
                <FaTimes />
              </button>
            </div>
            <form>
              <input
                type="text"
                placeholder="Search..."
                className="inputElement"
              />
            </form>
            <nav style={{ paddingLeft: "30px" }}>
              <div>
                <Link to="/dashboard" className="linkContainer">
                  <FaHome className="icons" />
                  <p className="Headings">Dashboard</p>
                </Link>
              </div>

              <div>
                <Link to="/configuration" className="linkContainer">
                  <FaCog className="icons" />{" "}
                  <p className="Headings">Configuration</p>
                </Link>
              </div>

              <div>
                <Link to="/analytics" className="linkContainer">
                  <FaBarcode className="icons" />{" "}
                  <p className="Headings">Analytics</p>
                </Link>
              </div>

              <div>
                <Link to="/usermanage" className="linkContainer">
                  <FaUser className="icons" />{" "}
                  <p className="Headings">User Management</p>
                </Link>
              </div>

              <div>
                <Link to="/roalmanage" className="linkContainer">
                  <FaUserTag className="icons" />{" "}
                  <p className="Headings">Role Management</p>
                </Link>
              </div>
              <div>
                <Link to="/settings" className="linkContainer">
                  <FaCogs className="icons" />
                  <p className="Headings">Settings</p>
                </Link>
              </div>
            </nav>
            <button className="bg bg-success" onClick={toggleTheme}>
              Toggle
            </button>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Sidebar;
