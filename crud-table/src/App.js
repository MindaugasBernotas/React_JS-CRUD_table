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
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null,
  });
  const handleRemoveClick = (index) => {
    setUsers(users.filter((user, userIndex) => userIndex !== index));
  };

  const isFilledFields =
    userData.userName && userData.userSurname && userData.userSalary;

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if (editableUserData.isEdit) {
        const editableUserData = users;
        editedData.splice(editableUserData.userIndex, 1, userData);
        setUsers(editedData);
      } else {
        setUsers((prevState) => [...prevState, userData]);
      }
      setUsers((prevState) => [...prevState, userData]);
      setUserData(initialValues);
    }
  };
  const handleCleanClick = () => setUserData(initialValues);
  const handleEditClick = (data, index) => {
    setUserData(data);
    setEditableUserData({
      isEdit: true,
      userIndex: index,
    });
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
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.Name}</td>
                  <td>{user.userSurname}</td>
                  <td>{user.userSalary}</td>
                  <td>
                    <div>
                      <button
                        className="edit-action"
                        onClick={() => handleEditClick(user, index)}
                      >
                        edit
                      </button>
                      <button
                        className="remove-action"
                        onClick={() => handleRemoveClick(index)}
                      >
                        remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
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
              <button disabled={!isFilledFields} type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
