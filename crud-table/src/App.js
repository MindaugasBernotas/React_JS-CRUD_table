import React, { useState } from "react";
import "./App.css";

const initialValues = {
  userName: "",
  userSurname: "",
  userSalary: "",
};

function App() {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const handleSubmitUser = (e) => {
    e.preventDefault();
    setUsers((prevState) => [...prevState, userData]);
    setUserData(initialValues);
  };
  console.log("users", users);
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
            <th>Actions</th>
            <tbody>
              {users.map((user) => (
                <div>
                  <div></div>
                  <div></div>
                </div>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <form onSubmit={handleSubmitUser}>
            <input
              placeholder="Write your name"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
              value={userData.userName}
            />
            <input
              placeholder="Write your surname"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userSurname: e.target.value,
                }))
              }
              value={userData.userSurname}
            />
            <input
              placeholder="Write your salary"
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userSalary: e.target.value,
                }))
              }
              value={userData.userSalary}
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
