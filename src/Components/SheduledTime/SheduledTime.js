import React from "react";
import Form from "react-bootstrap/Form";
import { Table } from "react-bootstrap";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BiRadioCircleMarked } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import "./SheduledTime.css";

function SheduledTime() {
  return (
    <div style={{ marginLeft: "20%" }}>
      <div>
        <div className="sheduledContainer">
          <div className="sheduleCon">
            <h1 className="sheduledHeading">Scheduled Time</h1>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "15px" }}
          >
            <div>
              <Form.Select
                aria-label="Default select example"
                className="formInputs"
              >
                <option>
                  <div>
                    <p>Select Filter</p>
                  </div>
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="formInputs"
              >
                <option>
                  <div>
                    <p>Select Filter</p>
                  </div>
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <button className="buttonEl">Submit</button>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "30px" }}>
          <div className="sheduledArrow">
            <p>
              <BiRadioCircleMarked height={40} />
              Scheduled Downtime
              <AiFillCaretDown />
            </p>
          </div>
          <div
            style={{
              boxShadow: "rgb(99 99 99 / 20%) 5px 0px 1px 5px",
            }}
          >
            <Table striped bordered hover>
              <thead style={{ border: "1px solid" }}>
                <tr style={{ border: "1px solid" }}>
                  <th>
                    Host <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Service <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Entry Time <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Author <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Comment <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Start Time <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    End Time
                    <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Type
                    <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Duration
                    <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Downtime
                    <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Trigger ID
                    <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    In Effect
                    <FaAngleUp />
                    <FaAngleDown />
                  </th>
                  <th>
                    Action
                    <FaAngleUp />
                    <FaAngleDown />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ display: "flex" }}>
                    <input type="checkbox" />
                    Abc
                  </td>
                  <td>Car</td>
                  <td>Car</td>
                  <td>Car</td>
                  <td>Map</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td style={{ display: "flex" }}>
                    <input type="checkbox" />
                    Xyz
                  </td>
                  <td>Car</td>
                  <td>Car</td>
                  <td>Car</td>
                  <td>Map</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td style={{ display: "flex" }}>
                    <input type="checkbox" />
                    Pqr
                  </td>
                  <td>Car</td>
                  <td>Car</td>
                  <td>Car</td>
                  <td>Map</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td style={{ display: "flex" }}>
                    <input type="checkbox" />
                    Dom
                  </td>
                  <td>Car</td>
                  <td>Car</td>
                  <td>Car</td>
                  <td>Map</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>History</td>
                  <td>...</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div style={{ display: "flex" }}>
            <div className="downContainer">
              <p>With Selected</p>
              <AiFillCaretDown />
            </div>
            <div className="sheduledArrow" style={{ margin: "20px" }}>
              <BiRadioCircleMarked height={40} />
              Scheduled Downtime
              <AiFillCaretDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SheduledTime;
