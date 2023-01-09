import React from "react";
import "./UserManage.css";
function UserManage() {
  return (
    <div style={{ marginLeft: "30%" }}>
      <div>
        <div className="userManageCon">
          <h1 className="UserHeading">User Management</h1>
        </div>
        <div className="inputsContainer">
          <div>
            <div className="inputsSubContainer">
              <label for="first">First Name</label>
              <br />
              <input
                id="first"
                placeholder="first name"
                className="inputFields"
              />
            </div>
            <div className="inputsSubContainer">
              <label for="first">User ID</label>
              <br />
              <input id="first" placeholder="User Id" className="inputFields" />
            </div>
            <div className="inputsSubContainer">
              <label for="first">Phone Number</label>
              <br />
              <input
                id="first"
                placeholder="Phone Number"
                className="inputFields"
              />
            </div>
            <div className="inputsSubContainer">
              <label for="first">KYC</label>
              <br />
              <input id="first" placeholder="KYC" className="inputFields" />
            </div>
            <div className="checkboxContainer">
              <label>Role</label>
              <div style={{ margin: "30px" }}>
                <div style={{ marginBottom: "15px" }}>
                  <input type="checkbox" />
                  <label style={{ fontWeight: "500", marginLeft: "10px" }}>
                    Super Admin
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label style={{ fontWeight: "500", marginLeft: "10px" }}>
                    Admin
                  </label>
                </div>
              </div>
              <div style={{ margin: "30px" }}>
                <div style={{ marginBottom: "15px" }}>
                  <input type="checkbox" />
                  <label style={{ fontWeight: "500", marginLeft: "10px" }}>
                    Reseller
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label style={{ fontWeight: "500", marginLeft: "10px" }}>
                    User
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="inputsSubContainer">
              <label for="first">Last Name</label>
              <br />
              <input
                id="first"
                placeholder="Last Name"
                className="inputFields"
              />
            </div>
            <div className="inputsSubContainer">
              <label for="first">Email ID</label>
              <br />
              <input
                id="first"
                placeholder="Email ID"
                className="inputFields"
              />
            </div>
            <div className="inputsSubContainer">
              <label for="first">Description</label>
              <br />
              <input
                id="first"
                placeholder="Description"
                className="inputFields"
              />
            </div>
            <div className="inputsSubContainer">
              <label for="first">Purchase Service Plan</label>
              <br />
              <input
                id="first"
                placeholder="Purchase Service Plan"
                className="inputFields"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="deleteButton">Delete User</button>
        <button className="saveButton">Save</button>
      </div>
    </div>
  );
}

export default UserManage;
