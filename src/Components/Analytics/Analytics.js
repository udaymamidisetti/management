import React from "react";
import Context from "../context/Context";
import "./Analytics.css";

export default function Analytics() {
  return (
    <Context.Consumer>
      {(value) => {
        const { darkTheme } = value;
        const bgColor = darkTheme ? "bgDark" : "bgLight";
        return (
          <div style={{ marginLeft: "20%" }}>
            <div className={`${bgColor}`}>
              <div style={{ borderBottom: "3px solid black" }}>
                <div className="analyticsContainer">
                  <h1 className="analyticsHeading">Server Status</h1>
                </div>
                <div className="serverContainer">
                  <div className="serverStatusContainer">
                    <p className="statusPara">Server Status</p>
                    <select className="selectOption">
                      <option value="" disabled selected hidden>
                        Select Server Status
                      </option>
                    </select>
                  </div>
                  <div>
                    <button className="buttonS">Submit</button>
                  </div>
                  <div>
                    <button className="reportButton">
                      Report View|Graph View
                    </button>
                  </div>
                </div>
                <div className="summaryCon">
                  <h1 className="allPost">All Hosts</h1>
                  <h1 className="summaryHeading">Server Summary</h1>
                </div>
                <div className="statusContainer">
                  <div style={{ margin: "10px" }}>
                    <div className="GoodStatus">
                      <p className="statusNumber">50</p>
                    </div>
                    <p className="statusText">Good</p>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <div className="badStatus">
                      <p className="statusNumber">3</p>
                    </div>
                    <p className="statusText">Bad</p>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <div className="warningStatus">
                      <p className="statusNumber">3</p>
                    </div>
                    <p className="statusText">Warning/Predictive Failed</p>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <div className="allStatus">
                      <p className="statusNumber">50</p>
                    </div>
                    <p className="statusText">All</p>
                  </div>
                </div>
                <h1 className="timeHeading">Last Updated:Date.Time</h1>
              </div>
              <div>
                <div className="serverContainer">
                  <div className="serverStatusContainer">
                    <p className="statusPara">Server Status</p>
                    <select className="selectOption">
                      <option value="" disabled selected hidden>
                        Select Server Status
                      </option>
                    </select>
                  </div>
                  <div>
                    <button className="buttonS">Submit</button>
                  </div>
                </div>
                <div className="summaryCon">
                  <h1 className="allPost">All Hosts</h1>
                  <h1 className="summaryHeading">Server Summary</h1>
                </div>
                <div className="statusContainer">
                  <div style={{ margin: "10px" }}>
                    <div className="GoodStatus">
                      <p className="statusNumber">50</p>
                    </div>
                    <p className="statusText">Good</p>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <div className="badStatus">
                      <p className="statusNumber">3</p>
                    </div>
                    <p className="statusText">Bad</p>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <div className="warningStatus">
                      <p className="statusNumber">3</p>
                    </div>
                    <p className="statusText">Warning/Predictive Failed</p>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <div className="allStatus">
                      <p className="statusNumber">50</p>
                    </div>
                    <p className="statusText">All</p>
                  </div>
                </div>
                <h1 className="timeHeading">Last Updated:Date.Time</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <button className="reportButton">
                    Report View|Graph View
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
