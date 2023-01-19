import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Context from "../context/Context";

import "./Dashboard.css";

function Dashboard() {
  /*const data = [
    {
      count: 4555697,
      language: "Hindi",
    },
  ];*/
  const dummyData = [
    {
      count: 4555697,
      desc: "CPU Usage",
    },
    {
      count: 4555697,
      desc: "Memory USage",
    },
    {
      count: 4555697,
      desc: "Network",
    },
    {
      count: 4555697,
      desc: "Error Attack",
    },
    {
      count: 4555697,
      desc: "Memory USage",
    },
    {
      count: 4555697,
      desc: "TCPIP Connection",
    },
    {
      count: 4555697,
      desc: "Bandwidth Usage I/O",
    },
    {
      count: 4555697,
      desc: "User Login",
    },
  ];
  const now = 50;
  return (
    <Context.Consumer>
      {(value) => {
        const { darkTheme } = value;
        const bgColor = darkTheme ? "bgDark" : "bgLight";
        return (
          <div className={`${bgColor}`} style={{ marginLeft: "20%" }}>
            <div className="dashboardContainer">
              <div className="dashInputContainer">
                <div>
                  <div className="userInfosContainer">
                    <p className="userInfos">Usage for User</p>
                    <select className="selectInput">
                      <option></option>
                    </select>
                  </div>
                  <div className="userInfosContainer">
                    <p className="userInfos">Overall Server</p>
                    <ProgressBar
                      className="progressBar"
                      now={now}
                      label={`${now}%`}
                    />
                  </div>
                </div>
                <div>
                  <div className="userInfosContainer">
                    <p className="userInfos">Last Log In User</p>
                    <input className="selectInput" />
                  </div>
                  <div className="userInfosContainer">
                    <p className="userInfos">Date</p>
                    <input type="date" className="selectInput" />
                  </div>
                </div>
                <div>
                  <div className="userInfosContainer">
                    <p className="userInfos">Last Log In IP</p>
                    <input className="selectInput" />
                  </div>
                  <div className="userInfosContainer">
                    <p className="userInfos">Time</p>
                    <input className="selectInput" />
                  </div>
                </div>
                <div>
                  <button className="SubButton">Submit</button>
                </div>
              </div>
            </div>
            <div className="pichartContainer">
              {dummyData.map((each, index) => {
                return (
                  <div className="chartsContainer" key={index}>
                    <ResponsiveContainer width="100%" height={150}>
                      <PieChart>
                        <Pie
                          cx="50%"
                          cy="50%"
                          data={dummyData}
                          startAngle={0}
                          endAngle={360}
                          innerRadius="50%"
                          outerRadius="70%"
                          dataKey="count"
                        >
                          <Cell fill="#f15c27" />
                          <Cell fill="#1f579e" />
                          <Cell fill="#a44c9e" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <p className="chartStatuses">{each.desc}</p>
                  </div>
                );
              })}
            </div>
            <button className="seeMoreButton">See More</button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default Dashboard;
