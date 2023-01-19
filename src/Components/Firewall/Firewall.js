import React from "react";
import { Table } from "react-bootstrap";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import "./Firewall.css";
function Firewall() {
  return (
    <div style={{ marginLeft: "20%" }}>
      <div>
        <div>
          <div className="firewallContainer">
            <h1 className="firewallHeading">Firewall</h1>
            <div style={{ marginLeft: "40px", marginTop: "40px" }}>
              <select className="selectOption">
                <option value="" disabled selected hidden>
                  Select Server
                </option>
              </select>
              <button className="selectServerButton">Select Server</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Table striped bordered hover>
          <thead style={{ border: "1px solid" }}>
            <tr style={{ border: "1px solid" }}>
              <th>
                Priority <FaAngleUp />
                <FaAngleDown />
              </th>
              <th>
                IP <FaAngleUp />
                <FaAngleDown />
              </th>
              <th>
                Type <FaAngleUp />
                <FaAngleDown />
              </th>
              <th>
                Source <FaAngleUp />
                <FaAngleDown />
              </th>
              <th>
                Destination <FaAngleUp />
                <FaAngleDown />
              </th>
              <th>
                Action <FaAngleUp />
                <FaAngleDown />
              </th>
              <th>
                Move Rule <FaAngleUp />
                <FaAngleDown />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abc</td>
              <td>MH01AP5566</td>
              <td>Car</td>
              <td>Map</td>
              <td>History</td>
              <td>...</td>
              <td>History</td>
            </tr>
            <tr>
              <td>Xyz</td>
              <td>MH01AP1166</td>
              <td>Car</td>
              <td>Map</td>
              <td>History</td>
              <td>...</td>
              <td>History</td>
            </tr>
            <tr>
              <td>Pqr</td>
              <td>MH02AP5566</td>
              <td>Car</td>
              <td>Map</td>
              <td>History</td>
              <td>...</td>
              <td>History</td>
            </tr>
            <tr>
              <td>Dom</td>
              <td>MH01AA5466</td>
              <td>Car</td>
              <td>Map</td>
              <td>History</td>
              <td>...</td>
              <td>History</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="buttonsContainer">
        <button className="lastButtons">Save Firewall Roules</button>
        <button className="lastButtons">Generate New Firewall Rules</button>
        <button className="lastButtons">Reset</button>
      </div>
    </div>
  );
}

export default Firewall;
