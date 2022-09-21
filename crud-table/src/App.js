import React, { useState } from "react";
import "./App.css";

const initialValues = {
  userName: "",
  userSurname: "",
  userSalary: "",
};

function App() {
  const [userData, setUserData] = useState(initialValues);
  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <table>
            <th>#</th>
            <th>User Name</th>
            <th>User Surname</th>
            <th>User Salary</th>
            <th>Actions</th>
            <tbody></tbody>
          </table>
        </div>
        <div>
          <form>
            <input
              placeholder="Write your name"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
            />
            <input
              placeholder="Write your surname"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userSurname: e.target.value,
                }))
              }
            />
            <input
              placeholder="Write your salary"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userSalary: e.target.value,
                }))
              }
            />
            <div className="buttons-wrapper">
              <button type="reset">Clean</button>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
