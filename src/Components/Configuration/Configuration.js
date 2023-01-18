import React from "react";
import "./Configuration.css";
import { Table } from "react-bootstrap";

import Context from "../context/Context";
function Configuration() {
  return (
    <Context.Consumer>
      {(value) => {
        const { darkTheme } = value;
        const bgColor = darkTheme ? "bgDark" : "bgLight";
        return (
          <div style={{ marginLeft: "20%" }}>
            <div className={`${bgColor}`}>
              <div>
                <div className="confiContainer">
                  <h1 className="configHeading">Configuration</h1>
                </div>
              </div>
              <div className="buttonContainer">
                <select className="addButton">
                  <option>ADD</option>
                </select>
              </div>
              <div className="tableContainer">
                <div>
                  <Table striped bordered hover>
                    <thead style={{ border: "1px solid" }}>
                      <tr style={{ border: "1px solid" }}>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Log Path</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Application</td>
                        <td>Ftp</td>
                        <td>/ver/log/ftp.log</td>
                      </tr>
                      <tr>
                        <td>Customer</td>
                        <td>Apache</td>
                        <td>/ver/log/apache</td>
                      </tr>
                      <tr>
                        <td>Service</td>
                        <td>Ngnix</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Service</td>
                        <td>My Sql</td>
                        <td>/ver/log/mysql</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="buttonContainer2">
                <div>
                  <button className="rightButton">Auto Detect</button>
                </div>
                <div>
                  <button className="rightButton">Import</button>
                  <button className="rightButton">Export</button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default Configuration;
