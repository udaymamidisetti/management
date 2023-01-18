import React from "react";
import "./FirewallServer.css";

function FirewallServer() {
  return (
    <div style={{ marginLeft: "20%" }}>
      <div>
        <div className="fireContainer">
          <h1 className="fireHeading">Firewall For Server</h1>
        </div>
        <div className="fireOptionCont">
          <select className="selectOption">
            <option value="" disabled selected hidden>
              Select Server
            </option>
          </select>
          <button className="selectButton">Select Server</button>
        </div>
      </div>
      <div className="countrySpecificContainer">
        <p className="countrySpecify">
          Firewall Specific Country Specific Server
        </p>
        <div className="countryInputsContainer">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "50px" }}>
              <label htmlFor="banInput" className="labelElements">
                Ban/Unban Operation
              </label>
              <br />
              <input
                id="banInput"
                className="countryInputs"
                placeholder="Ban Unban Operation"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label className="labelElements" for="host">
                Select Host/s
              </label>
              <br />
              <select className="countryInputs" id="host">
                <option value="" disabled selected hidden>
                  Select Host/s
                </option>
              </select>
            </div>
            <button className="buttons" style={{ alignSelf: "flex-end" }}>
              Reset
            </button>
          </div>
          <div>
            <div style={{ marginBottom: "50px" }}>
              <label className="labelElements" for="country">
                Select Country One or More..
              </label>
              <br />
              <select className="countryInputs" id="country">
                <option value="" disabled selected hidden>
                  Country
                </option>
                <option></option>
              </select>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="priority" className="labelElements">
                Priority
              </label>
              <br />
              <input
                id="priority"
                className="countryInputs"
                placeholder="Priority"
              />
            </div>
            <button className="buttons">Submit</button>
          </div>
        </div>
      </div>
      <div className="countrySpecificContainer">
        <p className="countrySpecify">Ban Unban/Specific IP</p>
        <div className="countryInputsContainer">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "50px" }}>
              <label htmlFor="banInput" className="labelElements">
                IP
              </label>
              <br />
              <input
                id="banInput"
                className="countryInputs"
                placeholder="IP Adress"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label className="labelElements" for="host">
                Ban/Unban
              </label>
              <br />
              <select className="countryInputs" id="host">
                <option value="" disabled selected hidden>
                  Ban/Unban
                </option>
              </select>
            </div>
            <button className="buttons" style={{ alignSelf: "flex-end" }}>
              Reset
            </button>
          </div>
          <div>
            <div style={{ marginBottom: "50px" }}>
              <label className="labelElements" for="country">
                Sub Net
              </label>
              <br />
              <input
                id="country"
                className="countryInputs"
                placeholder="SubNet"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="priority" className="labelElements">
                Priority
              </label>
              <br />
              <input
                id="priority"
                className="countryInputs"
                placeholder="Priority"
              />
            </div>
            <button className="buttons">Submit</button>
          </div>
        </div>
      </div>
      <div className="resetButtonsContainer">
        <button className="resetButtons">Reset Firewall Rules</button>
        <button className="resetButtons">
          Regenerate Firewall Rules From Scratch
        </button>
      </div>
    </div>
  );
}

export default FirewallServer;
