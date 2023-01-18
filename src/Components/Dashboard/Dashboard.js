import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import Context from "../context/Context";

import "./Dashboard.css";

function Dashboard() {
  const data = [
    {
      count: 809680,
      language: "Telugu",
    },
    {
      count: 4555697,
      language: "Hindi",
    },
    {
      count: 12345657,
      language: "English",
    },
  ];
  /* const dummyData = [
    {
      desc: "CPU Usage",
    },
    {
      desc: "Memory USage",
    },
    {
      desc: "Network",
    },
    {
      desc: "Error Attack",
    },
    {
      desc: "Memory USage",
    },
    {
      desc: "TCPIP Connection",
    },
    {
      desc: "Bandwidth Usage I/O",
    },
    {
      desc: "User Login",
    },
  ]; */
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
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  cx="70%"
                  cy="40%"
                  data={data}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="40%"
                  outerRadius="70%"
                  dataKey="count"
                >
                  <Cell name="Telugu" fill="#fecba6" />
                  <Cell name="Hindi" fill="#b3d23f" />
                  <Cell name="English" fill="#a44c9e" />
                </Pie>
                <Legend
                  iconType="circle"
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default Dashboard;
