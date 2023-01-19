import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./Sidebar.css";
import Context from "../context/Context";

const Sidebar = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [settingsDrop, setSettingsDrop] = useState(false);
  const [activeText, setActiveText] = useState(false);
  const [fireServer, setFireserver] = useState(false);

  const activeColor = () => {
    setActiveText(!activeText);
    console.log(activeText);
  };
  const dropDown = () => {
    setShowDrop(!showDrop);
    console.log(showDrop);
  };
  const settings = () => {
    setSettingsDrop(!settingsDrop);
  };
  const firesublink = () => {
    setFireserver(!fireServer);
  };
  return (
    <Context.Consumer>
      {(value) => {
        const { toggleTheme } = value;
        console.log(value.darkTheme);

        return (
          <div className="sidebar">
            <div className="dotContainer">
              <span class="dot1"></span>
              <span class="dot2"></span>
              <span class="dot3"></span>
            </div>
            <img
              src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png"
              alt="Sun"
              className="sidebar-image"
            />
            <div className="sidebar-header">
              <button className="sidebar-close-button">
                <HiOutlineArrowSmLeft />
              </button>
            </div>
            <form>
              <input
                type="text"
                placeholder="Search..."
                className="inputElement"
              />
            </form>
            <nav>
              <div>
                <Link to="/" className="linkContainer" onClick={activeColor}>
                  <FaHome className="icons" />
                  <p className="Headings">Dashboard</p>
                </Link>
              </div>

              <div>
                <Link
                  to="/configuration"
                  className="linkContainer"
                  onClick={dropDown}
                >
                  <FaCog className="icons" />{" "}
                  <p className="Headings">Configuration</p>
                </Link>
              </div>
              {showDrop ? (
                <div>
                  <Link to="/sheduledtime" className="linkContainer">
                    <p className="Headings">Scheduled Downtime</p>
                  </Link>
                </div>
              ) : null}

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
                <Link className="linkContainer" onClick={settings}>
                  <FaCogs className="icons" />
                  <p className="Headings">Settings</p>
                </Link>
              </div>
              {settingsDrop ? (
                <div>
                  <Link className="linkContainer" to="/alerts">
                    <p className="Headings">Alerts</p>
                  </Link>

                  <Link
                    className="linkContainer"
                    to="/firewall"
                    onClick={firesublink}
                  >
                    <p className="Headings">Firewall</p>
                  </Link>
                  {fireServer ? (
                    <Link className="linkContainer" to="/firewallforserver">
                      <p className="Headings">Firewall For Server</p>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              ) : null}
            </nav>
            <button className="toggleModeButton" onClick={toggleTheme}>
              <div
                className={value.darkTheme ? "darkContainer" : "lightContainer"}
              >
                <MdLightMode />
                <p>Light</p>
              </div>
              <div
                className={value.darkTheme ? "lightContainer" : "darkContainer"}
              >
                <MdDarkMode />
                <p>Dark</p>
              </div>
            </button>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Sidebar;
