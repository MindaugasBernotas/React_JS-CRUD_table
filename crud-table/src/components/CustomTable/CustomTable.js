import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CustomTable.css';

const CustomTable = ({ 
   users,
   handleEditClick,
   handleRemoveClick
 }) => {
   return (
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
                  <td>{user.userName}</td>
                  <td>{user.userSurname}</td>
                  <td>{user.userSalary}</td>
                  <td>
                     <div>
                        <CustomButton
                           label="edit"
                           classNames="edit-ection"
                           handleClick={handleEditClick}
                           data={({ index, user })}
                           type="button"
                        />

                        <CustomButton
                           label="remove"
                           classNames="remove-action"
                           handleClick={handleRemoveClick}
                           data={({ index })}
                           type="button"
                        />
                     </div>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default CustomTable;