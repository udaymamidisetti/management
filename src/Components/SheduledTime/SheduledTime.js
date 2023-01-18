import React from "react";
import Form from "react-bootstrap/Form";
import { BsFilter } from "react-icons/bs";
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
    </div>
  );
}

export default SheduledTime;
