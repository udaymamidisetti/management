import React from "react";
import "./Alerts.css";
import { Table } from "react-bootstrap";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
function Alerts() {
  return (
    <div style={{ marginLeft: "20%" }}>
      <div>
        <div className="alertContainer">
          <h1 className="alertsHeading">Latest Alerts</h1>
        </div>
      </div>
      <div>
        <Table striped bordered hover>
          <thead style={{ border: "1px solid" }}>
            <tr style={{ border: "1px solid" }}>
              <th>
                Source <FaAngleUp />
                <FaAngleDown />
              </th>
              <th>
                Latest Alerts <FaAngleUp />
                <FaAngleDown />
              </th>
              <th>
                Alerts <FaAngleUp />
                <FaAngleDown />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>www.Abc.Com</td>
              <td>606d 13h 15m 51s</td>
              <td>HTTP is Warning</td>
            </tr>
            <tr>
              <td>www.Abc.Com</td>
              <td>606d 13h 15m 51s</td>
              <td>HTTP is Warning</td>
            </tr>
            <tr>
              <td>www.Abc.Com</td>
              <td>606d 13h 15m 51s</td>
              <td>HTTP is Warning</td>
            </tr>
            <tr>
              <td>www.Abc.Com</td>
              <td>606d 13h 15m 51s</td>
              <td>HTTP is Warning</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Alerts;
